class MarkdownToc {

    constructor() {
        this.inputArea = document.getElementById("input-area");
        this.outputArea = document.getElementById("output-area");
        this.levelUpButton = document.getElementById("level-up");
        this.levelUpButton.addEventListener("click", this.changeLevel.bind(this, +1));
        this.levelDownButton = document.getElementById("level-down");
        this.levelDownButton.addEventListener("click", this.changeLevel.bind(this, -1));
        this.levelsToShowElement = document.getElementById("levels-to-show");
        this.levelsToShow = 9; // ToC levels

        this.inputArea.addEventListener("input", this.process.bind(this));
        this.process();
    }

    changeLevel(delta) {
        this.levelsToShow += delta;
        if (this.levelsToShow < 1) {
            this.levelsToShow = 1;
        } else if (this.levelsToShow > 10) {
            this.levelsToShow = 10;
        } else if (typeof this.levelsToShow !== "number") {
            this.levelsToShow = 2;
        }
        this.levelsToShowElement.setAttribute("value", this.levelsToShow);
        this.process();
    }

    process() {
        let input = this.inputArea.value;
        const menus = ["# Table of contents", ""];
        let isCodeBlock = false;
        let topLevel = NaN;
        let previous = null;

        function strTomarkdownTitle(str) {
            // 本函数 把任意字符串(可支持中文) 变为 markdown的标题.
            // 实测 生成的toc 完全兼容了 github markdown web.
            let filteredStr = str.replace('[\t|\&]', ''); // 把每一个\t替换为空
            filteredStr = filteredStr.replace(/ /g, '-'); // 将 每一个空格符号、每一个&符号 都替换成 单个连字符-。
            filteredStr = filteredStr.replace(/['"]+/g, ''); // 将 连续的 单引号、双引号 替换成 空。
            filteredStr = filteredStr.replace(/[^\u4E00-\u9FA50-9a-zA-Z\-\ \_]/g, ''); // 使用正则表达式 把 非这些字符（汉字 数字 字母 连字符- 空格 下划线_ ） 的字符替换为空
            filteredStr = filteredStr.toLowerCase();
            return filteredStr;
        }


        // 检测并删除 空的markdown标题 如
        // ### 
        // #
        // 等
        const regex = /#+\s*\n/g;
        const matches = input.match(regex);

        if (matches && matches.length > 0) {
            const confirmMessage = `找到了 ${matches.length} 个匹配项，如下所示：\n\n${matches.join("\n")}\n很明显，它们是空标题，不应该出现在textarea中，建议手动删除它们。\n继续生成ToC？\n选择【yes】会在js里删除这些空标题,这样就可以正确生成ToC了。不修改textarea的内容。`;
            const userConfirmation = confirm(confirmMessage);

            if (userConfirmation) {
                const newText = input.replace(regex, "");
                console.log("删除后的文本：", newText);
                input = newText; // 替换变量 即在js里 删除了 所有的 空标题 // 而不会改变textarea的内容
            } else {
                console.log("用户选择不删除。");
            }
        } else {
            console.log("没有找到匹配项。");
        }


        for (let line of input.split("\n")) {

            const trimmed = line.trim();

            if (trimmed.startsWith("```")) {
                isCodeBlock = !isCodeBlock;
            }

            if (isCodeBlock) {
                continue;
            }

            let level = NaN;
            let title = null;

            // Check for:
            // 1. ATX-style headers: ## My Header
            //
            // 2. Setext-style headers:
            //     a) Level 1 header: My Header
            //                        =========
            //
            //     b) Level 2 header: My Header
            //                        ---------
            //
            //    Edge cases that do not count as headers:
            //     i) Horizontal rule ("Underline" preceded by empty line):
            //
            //           Some paragraph 1
            //           <empty line>
            //           -----
            //           Some paragraph 2
            //
            //     ii) Two or more horizontal rules:
            //
            //           Some paragraph 1
            //
            //           -----
            //           -----
            //           -----
            //           Some paragraph 2

            if (trimmed.startsWith("#")) {
                const match = trimmed.match(/(#+)\s*(.*?)#*\s*$/);
                level = match[1].length;
                title = match[2].trim();
            } else if (previous != null && previous.length > 0 && trimmed.length > 0) {
                if (trimmed.match(/[^=]/g) == null) {
                    level = 1;
                    title = previous;
                } else if (trimmed.match(/[^-]/g) == null && previous.match(/[^-]/g) != null) {
                    level = 2;
                    title = previous;
                }
            }

            if (!isNaN(level) && title != null) {
                if (isNaN(topLevel)) {
                    topLevel = level;
                }

                if (level - topLevel >= this.levelsToShow) {
                    continue;
                }


                const link = strTomarkdownTitle(title);
                const menu = `${"  ".repeat(level - topLevel)}- [${title}](#${link})`;
                menus.push(menu);

                previous = null;
            } else {
                previous = trimmed;
            }
        }

        this.outputArea.value = menus.join("\n");
    }
}
