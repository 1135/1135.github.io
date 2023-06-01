class MarkdownToc {

    constructor () {
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
        const input = this.inputArea.value;
        const menus = ["# Table of contents", ""];
        let isCodeBlock = false;
        let topLevel = NaN;
        let previous = null;
        
function strTomarkdownTitle(str) {
  // 本函数 把任意字符串(可支持中文) 变为 markdown的标题.
  let filteredStr = filteredStr.replace(/[\&\s'"]+/g, '-'); // 将连续的空格、单引号、双引号替换成 单个连字符-。 连字符不变。
  filteredStr = str.replace(/[^\u4E00-\u9FA50-9a-zA-Z\-\ \_\&]/g, ''); // 使用正则表达式 把 非这些字符（汉字 数字 字母 连字符- 空格  下划线_ ） 的字符替换为空
  filteredStr = filteredStr.toLowerCase();
  return filteredStr;
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
