/**
 * 1135 Tools - Main Logic
 * Handles Theme Switching and Internationalization (i18n)
 */

const translations = {
    'zh': {
        'title': '1135 工具集合',
        'nav_tools': '工具集合',
        'nav_web_security': 'Web攻防工具',
        'nav_general': '通用工具',
        'nav_demos': '演示/Demo',
        'nav_notes_public': '公开笔记',
        'nav_notes_private': '私有笔记 🔒',
        'welcome_title': '欢迎来到 1135 工具集合',
        'welcome_desc': '这里收集了各种实用的在线工具，帮助您提高工作效率。所有工具都经过精心设计，确保良好的用户体验。',
        'cat_web_security': 'Web攻防工具',
        'cat_general': '通用工具',
        'cat_demos': '演示/Demo',
        'tool_exec_title': '命令变形工具',
        'tool_exec_desc': '提供代码执行和测试功能，支持多种编程语言的在线运行环境。',
        'tool_xss_title': 'XSS武器化',
        'tool_xss_desc': 'XSS攻击测试和防护工具，帮助开发者了解和防范跨站脚本攻击。',
        'tool_xss_payloads_title': 'XSS Payload库',
        'tool_xss_payloads_desc': 'XSS Payload 库，包含各种 XSS 攻击载荷和测试用例。',
        'tool_diff_title': 'Diff工具',
        'tool_diff_desc': '文本差异对比工具，支持文件、代码、文本的差异比较和合并。',
        'diff_added_lines': '新增行数',
        'diff_removed_lines': '删除行数',
        'diff_unchanged_lines': '未变更行数',
        'diff_line_similarity': '行相似度',
        'third_party': '(第三方)',
        'tool_phishing_title': '钓鱼页面演示',
        'tool_phishing_desc': '钓鱼页面演示，用于安全教育和防护意识培训。',
        'tool_download_title': 'HTML Smuggling',
        'tool_download_desc': 'HTML走私技术演示，通过JavaScript动态生成并下载文件。',
        'tool_clipboard_title': '剪贴板读取',
        'tool_clipboard_desc': '演示浏览器剪贴板API，展示潜在的隐私风险。',
        'tool_localfile_title': '本地文件读取',
        'tool_localfile_desc': '演示file://协议下的本地文件读取，展示XSS/LFI漏洞利用场景。',
        'tool_login_demo_title': '登录页面演示',
        'tool_login_demo_desc': '模拟登录页面，用于演示钓鱼攻击和安全意识培训。',
        'tool_postmessage_title': 'postMessage漏洞演示',
        'tool_postmessage_desc': '演示window.postMessage API的安全问题和跨域通信漏洞。',
        'tool_totp_title': 'TOTP生成器',
        'tool_totp_desc': '生成基于时间的一次性密码(TOTP)，支持自定义密钥和参数。',
        'tool_md2pdf_title': 'Markdown to PDF',
        'tool_md2pdf_desc': '在线将Markdown转换为PDF，支持多种风格（黑客、学术、商务）和中文输出。',
        'tool_toc_title': 'Markdown ToC Generator',
        'tool_toc_desc': '自动为Markdown文档生成目录结构，提高文档的可读性和导航性。',
        'tool_cyberchef_title': 'CyberChef',
        'tool_cyberchef_desc': 'The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis.',
        'tool_hemmelig_title': 'Hemmelig',
        'tool_hemmelig_desc': 'Secure secret sharing service for sharing sensitive information.',
        'tool_dedup_title': '去重工具',
        'tool_dedup_desc': '文本列表去重工具，支持保持顺序、正序或倒序排列，并提供统计信息。',
        'tool_ip_title': 'IP工具箱',
        'tool_ip_desc': 'IP地址计算器，支持CIDR掩码计算、公网/内网判断、进制转换等功能。包含SSRF Payload生成器。',
        'tool_editor_title': '通用编辑器',
        'tool_editor_desc': '功能强大的在线文本编辑器，支持多种文件格式、语法高亮、代码折叠等功能。',
        'theme_toggle_title': '切换主题',
        'lang_toggle_title': '切换语言',
        'dedup_mode': '模式:',
        'dedup_keep_order': '保持原序',
        'dedup_sort_asc': '升序排列',
        'dedup_sort_desc': '降序排列',
        'dedup_process': '执行去重',
        'dedup_copy': '复制结果',
        'dedup_input': '输入列表',
        'dedup_output': '去重结果',
        'dedup_clear': '清空',
        'ip_network_info': '网络详情',
        'ip_range_info': '地址范围',
        'ip_formats': '格式转换',
        'export_button': '导出',
        'pdf_mobile': '.pdf (手机友好)',
        'enable_bg_color': '自定义背景',
        'enable_bg_color': '自定义背景',
        'enable_watermark': 'PDF 水印',
        'watermark_type_footer': '页脚 (右下角)',
        'watermark_type_full': '全屏 (斜向)',
        'toc_button': '生成目录',
        'toc_modal_title': '生成目录设置',
        'toc_confirm_button': '生成目录',
        'toc_title_in_doc': '生成目录',
        'toc_insert_label': '插入目录',
        'export_auto_title': '自动填写文件标题',
        'toc_copy_button': '复制到剪贴板',
        'code_block_space_error': '代码块标记（如 ```mermaid）前有空格，必须从行首开始（无缩进）',
        'code_block_trailing_space': '代码块标记后有空格，建议移除',
        'unclosed_code_block': '代码块未闭合，请添加结束标记 ```',
        'unmatched_code_blocks': '代码块标记数量为奇数，可能有未闭合的代码块',
        'visibility_title': '显示',
        'show_input': '输入区域',
        'show_preview': '预览区域',
        'sync_scroll': '同步滚动',
        'panel_input_title': 'Markdown 输入',
        'panel_preview_title': '预览',
        'toc_level_label': '级别',
        'style_academic': '学术',
        'style_business': '商务',
        'style_hacker': '黑客',
        'font_yahei': '雅黑',
        'font_simsun': '宋体',
        'font_kaiti': '楷体',
        'font_pingfang': '苹方',
        'font_noto': '思源黑体',
        'font_noto_serif': '思源宋体',
        'font_source_han': '思源黑体 (Source Han)',
        'font_wenquanyi': '文泉驿微米黑',
        'font_stheiti': '华文黑体',
        'font_stsong': '华文宋体',
        'font_fangsong': '仿宋',
        'font_stkaiti': '华文楷体',
        'font_jhenghei': '微软正黑体',
        'font_simhei': '黑体',
        'font_arial': 'Arial',
        'font_times': 'Times New Roman',
        'font_courier': 'Courier New',
        'font_georgia': 'Georgia',
        'font_verdana': 'Verdana',
        'input_placeholder': '在此输入 Markdown 内容...',
        'notes_button_title': '笔记',
        'about_site_title': '关于本站',
        // exec page
        'exec_title': '命令变形工具',
        'exec_desc': '生成各种命令执行payload，支持Java/Shell/Node.js/PowerShell等环境。',
        'exec_input_label': '要执行的命令：',
        'exec_env_label': '目标环境：',
        'exec_preset_btn': '快捷命令',
        'exec_copy': '复制',
        'exec_copied': '已复制!',
        // xss page
        'xss_title': 'XSS 武器化',
        'xss_desc': '生成隐蔽的XSS payload，在页面上不可见。',
        'xss_input_label': 'JavaScript文件URL：',
        // totp page
        'totp_title': 'TOTP 生成器',
        'totp_desc': '生成基于时间的一次性密码',
        'totp_secret_label': '密钥 (Secret Key)',
        'totp_digits_label': '位数',
        'totp_period_label': '周期 (秒)',
        'totp_algorithm_label': '算法',
        'totp_current_code': '当前验证码',
        'totp_time_remaining': '剩余时间',
        // postmessage page
        'postmessage_title': 'postMessage 漏洞演示',
        'postmessage_desc': '演示 window.postMessage API 的安全问题',
        'postmessage_same_domain': '同域 Iframe',
        'postmessage_cross_domain': '跨域 Iframe',
        'postmessage_send': '发送消息',
        // demo pages
        'demo_login_title': '登录页面演示',
        'demo_login_desc': '模拟登录页面，用于钓鱼攻击演示',
        'demo_download_title': 'HTML Smuggling 演示',
        'demo_download_desc': '通过JavaScript动态生成并下载文件',
        'demo_clipboard_title': '剪贴板读取演示',
        'demo_clipboard_desc': '演示浏览器剪贴板API的隐私风险',
        'demo_phishing_title': '钓鱼页面演示',
        'demo_phishing_desc': '用于安全意识培训',
        'localfile_title': '本地文件读取工具',
        'localfile_desc': '尝试通过 <code>file:///</code> 协议读取敏感本地文件（需要存在漏洞的上下文）并发送到服务器。',
        'localfile_section1_title': '单文件测试 - 对比所有5种方法',
        'localfile_section1_desc': '选择一个文件，使用所有5种方法进行读取测试，对比各方法的成功率和性能表现。适合验证不同方法在当前环境下的可用性。',
        'localfile_section1_info': '提示：默认测试 /etc/hosts 文件。此测试不会发送数据到服务器，仅用于验证方法可用性。',
        'localfile_test_file_label': '测试文件路径：',
        'localfile_test_file_placeholder': '/etc/passwd',
        'localfile_test_button': '开始测试所有方法',
        'localfile_test_button_processing': '测试中...',
        'localfile_test_results_title': '测试结果',
        'localfile_test_file_label_result': '测试文件：',
        'localfile_test_table_method': '方法',
        'localfile_test_table_status': '状态',
        'localfile_test_table_length': '数据长度',
        'localfile_test_table_time': '耗时 (ms)',
        'localfile_test_table_note': '错误/备注',
        'localfile_test_status_success': '[成功]',
        'localfile_test_status_error': '[失败]',
        'localfile_test_status_pending': '[等待中]',
        'localfile_test_bytes': ' 字节',
        'localfile_test_summary_title': '测试摘要',
        'localfile_test_summary_success': '成功：',
        'localfile_test_summary_failed': '失败：',
        'localfile_test_recommended': '推荐方法：',
        'localfile_test_consistency': '数据一致性：',
        'localfile_test_consistency_same': '[一致] 所有成功方法返回相同数据',
        'localfile_test_consistency_diff': '[不一致] 方法返回的数据不一致',
        'localfile_section2_title': '批量处理 - 读取所有文件并发送到服务器',
        'localfile_section2_desc': '使用选定的方法批量读取所有文件列表，并将读取到的内容发送到指定的服务器。适合实际的数据提取场景。',
        'localfile_section2_warning': '注意：此操作会尝试读取所有文件并发送到服务器。请确保服务器地址正确，且已获得授权。',
        'localfile_server_label': '接收服务器地址：',
        'localfile_server_placeholder': 'http://your-server.com/recv',
        'localfile_method_label': '选择读取方法：',
        'localfile_method_xhr': '1. XHR + FileReader (推荐)',
        'localfile_method_fetch': '2. Fetch API + Blob',
        'localfile_method_iframe': '3. iframe + contentWindow (仅文本)',
        'localfile_method_text': '4. FileReader.readAsText() (仅文本)',
        'localfile_method_arraybuffer': '5. FileReader.readAsArrayBuffer()',
        'localfile_batch_button': '开始批量处理',
        'localfile_batch_button_processing': '处理中...',
        'localfile_file_count': '文件列表：',
        'localfile_file_count_pending': '共 {count} 个文件待处理',
        'localfile_test_processing': '测试进行中，请稍候...',
        'localfile_test_empty_file': '请输入要测试的文件路径'
    },
    'en': {
        'title': '1135 Tool Collection',
        'nav_tools': 'Tools',
        'nav_web_security': 'Web Security',
        'nav_general': 'General Tools',
        'nav_demos': 'Demos',
        'nav_notes_public': 'Public Notes',
        'nav_notes_private': 'Private Notes 🔒',
        'welcome_title': 'Welcome to 1135 Tool Collection',
        'welcome_desc': 'A collection of practical online tools to improve your efficiency. All tools are designed for a great user experience.',
        'cat_web_security': 'Web Security',
        'cat_general': 'General Tools',
        'cat_demos': 'Demos',
        'tool_exec_title': 'Command Obfuscator',
        'tool_exec_desc': 'Code execution and testing environment supporting multiple programming languages.',
        'tool_xss_title': 'XSS Weaponizer',
        'tool_xss_desc': 'XSS testing and protection tool to help developers understand and prevent Cross-Site Scripting.',
        'tool_xss_payloads_title': 'XSS Payload Library',
        'tool_xss_payloads_desc': 'XSS Payload library containing various XSS attack payloads and test cases.',
        'tool_diff_title': 'Diff Tool',
        'tool_diff_desc': 'Text diff tool for comparing and merging differences in files, code, and text.',
        'diff_added_lines': 'Added Lines',
        'diff_removed_lines': 'Removed Lines',
        'diff_unchanged_lines': 'Unchanged Lines',
        'diff_line_similarity': 'Line Similarity',
        'third_party': '(Third Party)',
        'tool_phishing_title': 'Phishing Demo',
        'tool_phishing_desc': 'Phishing page demonstration for security awareness training.',
        'tool_download_title': 'HTML Smuggling',
        'tool_download_desc': 'HTML smuggling technique demo - dynamically generate and download files via JavaScript.',
        'tool_clipboard_title': 'Clipboard Reader',
        'tool_clipboard_desc': 'Browser Clipboard API demonstration showing potential privacy risks.',
        'tool_localfile_title': 'Local File Reader',
        'tool_localfile_desc': 'Demonstrates local file reading via file:// protocol for XSS/LFI exploitation scenarios.',
        'tool_login_demo_title': 'Login Page Demo',
        'tool_login_demo_desc': 'Simulated login page for phishing attack demonstration and security awareness training.',
        'tool_postmessage_title': 'postMessage Vulnerability Demo',
        'tool_postmessage_desc': 'Demonstrates window.postMessage API security issues and cross-origin communication vulnerabilities.',
        'tool_totp_title': 'TOTP Generator',
        'tool_totp_desc': 'Generate Time-based One-Time Passwords (TOTP) with custom secret keys and parameters.',
        'tool_md2pdf_title': 'Markdown to PDF',
        'tool_md2pdf_desc': 'Convert Markdown to PDF online with multiple styles (Hacker, Academic, Business).',
        'tool_toc_title': 'Markdown ToC Generator',
        'tool_toc_desc': 'Automatically generate Table of Contents for Markdown documents.',
        'tool_cyberchef_title': 'CyberChef',
        'tool_cyberchef_desc': 'The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis.',
        'tool_hemmelig_title': 'Hemmelig',
        'tool_hemmelig_desc': 'Secure secret sharing service for sharing sensitive information.',
        'tool_dedup_title': 'Remove Duplicates',
        'tool_dedup_desc': 'Remove duplicates from text lists, with options for sorting and statistics.',
        'tool_ip_title': 'IP Tool',
        'tool_ip_desc': 'IP address calculator, supporting CIDR, public/private detection, and format conversion. Includes SSRF Payload Generator.',
        'tool_editor_title': 'Universal Editor',
        'tool_editor_desc': 'Powerful online text editor with syntax highlighting, code folding, and support for multiple file formats.',
        'theme_toggle_title': 'Switch Theme',
        'lang_toggle_title': '切换语言',
        'dedup_mode': 'Mode:',
        'dedup_keep_order': 'Keep Order',
        'dedup_sort_asc': 'Sort Ascending',
        'dedup_sort_desc': 'Sort Descending',
        'dedup_process': 'Process',
        'dedup_copy': 'Copy Result',
        'dedup_input': 'Input',
        'dedup_output': 'Output',
        'dedup_clear': 'Clear',
        'ip_network_info': 'Network Details',
        'ip_range_info': 'Address Range',
        'ip_formats': 'Formats',
        'lang_toggle_title': 'Switch Language',
        'theme_toggle_title': 'Switch Theme',
        'export_button': 'Export',
        'pdf_mobile': '.pdf (Mobile Friendly)',
        'enable_bg_color': 'Custom Background',
        'enable_bg_color': 'Custom Background',
        'enable_watermark': 'PDF Watermark',
        'watermark_type_footer': 'Footer (Bottom Right)',
        'watermark_type_full': 'Full Page (Diagonal)',
        'toc_button': 'Generate ToC',
        'toc_modal_title': 'Generate Table of Contents',
        'toc_confirm_button': 'Generate ToC',
        'toc_title_in_doc': 'Table of Contents',
        'toc_insert_label': 'Insert ToC',
        'export_auto_title': 'Auto-fill filename',
        'toc_copy_button': 'Copy to Clipboard',
        'code_block_space_error': 'Code block marker (e.g., ```mermaid) has leading spaces, must start at line beginning (no indentation)',
        'code_block_trailing_space': 'Code block marker has trailing spaces, should be removed',
        'unclosed_code_block': 'Code block not closed, please add closing marker ```',
        'unmatched_code_blocks': 'Odd number of code block markers, may have unclosed code block',
        'visibility_title': 'Visibility',
        'show_input': 'Input Area',
        'show_preview': 'Preview Area',
        'sync_scroll': 'Sync Scroll',
        'panel_input_title': 'Markdown Input',
        'panel_preview_title': 'Preview',
        'toc_level_label': 'Level',
        'style_academic': 'Academic',
        'style_business': 'Business',
        'style_hacker': 'Hacker',
        'font_yahei': 'YaHei',
        'font_simsun': 'SimSun',
        'font_kaiti': 'KaiTi',
        'font_pingfang': 'PingFang',
        'font_noto': 'Noto Sans SC',
        'font_noto_serif': 'Noto Serif SC',
        'font_source_han': 'Source Han Sans SC',
        'font_wenquanyi': 'WenQuanYi Micro Hei',
        'font_stheiti': 'STHeiti',
        'font_stsong': 'STSong',
        'font_fangsong': 'FangSong',
        'font_stkaiti': 'STKaiti',
        'font_jhenghei': 'Microsoft JhengHei',
        'font_simhei': 'SimHei',
        'font_arial': 'Arial',
        'font_times': 'Times New Roman',
        'font_courier': 'Courier New',
        'font_georgia': 'Georgia',
        'font_verdana': 'Verdana',
        'input_placeholder': 'Type your markdown here...',
        'notes_button_title': 'Notes',
        'about_site_title': 'About This Site',
        // exec page
        'exec_title': 'EXEC Payload Generator',
        'exec_desc': 'Generate weaponized Command Execution payloads for Java/Shell/Node.js/PowerShell.',
        'exec_input_label': 'Command to execute:',
        'exec_env_label': 'Target Environment:',
        'exec_preset_btn': 'Quick Commands',
        'exec_copy': 'Copy',
        'exec_copied': 'Copied!',
        // xss page
        'xss_title': 'XSS Weaponizer',
        'xss_desc': 'Generate stealthy XSS payloads that are invisible on the page.',
        'xss_input_label': 'JavaScript file URL:',
        // totp page
        'totp_title': 'TOTP Generator',
        'totp_desc': 'Generate Time-based One-Time Passwords',
        'totp_secret_label': 'Secret Key',
        'totp_digits_label': 'Digits',
        'totp_period_label': 'Period (seconds)',
        'totp_algorithm_label': 'Algorithm',
        'totp_current_code': 'Current Code',
        'totp_time_remaining': 'Time Remaining',
        // postmessage page
        'postmessage_title': 'postMessage Vulnerability Demo',
        'postmessage_desc': 'Demonstrates window.postMessage API security issues',
        'postmessage_same_domain': 'Same Domain Iframe',
        'postmessage_cross_domain': 'Cross Domain Iframe',
        'postmessage_send': 'Send Message',
        // demo pages
        'demo_login_title': 'Login Page Demo',
        'demo_login_desc': 'Simulated login page for phishing demonstration',
        'demo_download_title': 'HTML Smuggling Demo',
        'demo_download_desc': 'Dynamically generate and download files via JavaScript',
        'demo_clipboard_title': 'Clipboard Reader Demo',
        'demo_clipboard_desc': 'Demonstrates browser Clipboard API privacy risks',
        'demo_phishing_title': 'Phishing Page Demo',
        'demo_phishing_desc': 'For security awareness training',
        'localfile_title': 'Local File Exfiltration Tool',
        'localfile_desc': 'Attempts to read sensitive local files via <code>file:///</code> protocol (requires vulnerable context) and exfiltrate them to a server.',
        'localfile_section1_title': 'Single File Test - Compare All 5 Methods',
        'localfile_section1_desc': 'Select a file and test all 5 methods to compare their success rate and performance. Suitable for verifying method availability in the current environment.',
        'localfile_section1_info': 'Tip: Default test file is /etc/hosts. This test does not send data to server, only for verifying method availability.',
        'localfile_test_file_label': 'Test File Path:',
        'localfile_test_file_placeholder': '/etc/passwd',
        'localfile_test_button': 'Test All Methods',
        'localfile_test_button_processing': 'Testing...',
        'localfile_test_results_title': 'Test Results',
        'localfile_test_file_label_result': 'Test File:',
        'localfile_test_table_method': 'Method',
        'localfile_test_table_status': 'Status',
        'localfile_test_table_length': 'Data Length',
        'localfile_test_table_time': 'Time (ms)',
        'localfile_test_table_note': 'Error/Note',
        'localfile_test_status_success': '[Success]',
        'localfile_test_status_error': '[Failed]',
        'localfile_test_status_pending': '[Pending]',
        'localfile_test_bytes': ' bytes',
        'localfile_test_summary_title': 'Test Summary',
        'localfile_test_summary_success': 'Success:',
        'localfile_test_summary_failed': 'Failed:',
        'localfile_test_recommended': 'Recommended Methods:',
        'localfile_test_consistency': 'Data Consistency:',
        'localfile_test_consistency_same': '[Consistent] All successful methods return identical data',
        'localfile_test_consistency_diff': '[Inconsistent] Methods return different data',
        'localfile_section2_title': 'Batch Processing - Read All Files and Send to Server',
        'localfile_section2_desc': 'Use the selected method to batch read all files in the list and send the content to the specified server. Suitable for actual data extraction scenarios.',
        'localfile_section2_warning': 'Warning: This operation will attempt to read all files and send them to the server. Please ensure the server address is correct and you have authorization.',
        'localfile_server_label': 'Exfiltration Server:',
        'localfile_server_placeholder': 'http://your-server.com/recv',
        'localfile_method_label': 'Select Method:',
        'localfile_method_xhr': '1. XHR + FileReader (Recommended)',
        'localfile_method_fetch': '2. Fetch API + Blob',
        'localfile_method_iframe': '3. iframe + contentWindow (Text Only)',
        'localfile_method_text': '4. FileReader.readAsText() (Text Only)',
        'localfile_method_arraybuffer': '5. FileReader.readAsArrayBuffer()',
        'localfile_batch_button': 'Start Batch Processing',
        'localfile_batch_button_processing': 'Processing...',
        'localfile_file_count': 'File List:',
        'localfile_file_count_pending': '{count} files pending',
        'localfile_test_processing': 'Testing in progress, please wait...',
        'localfile_test_empty_file': 'Please enter a file path to test'
    }
};

// State
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentLang = localStorage.getItem('lang') || 'zh';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    // Event Delegation for dynamically loaded nav
    document.body.addEventListener('click', (e) => {
        // Theme Toggle
        if (e.target.closest('.theme-toggle-btn')) {
            toggleTheme();
        }
        // Language Toggle
        if (e.target.closest('.lang-toggle-btn')) {
            toggleLanguage();
        }

        // Navigation Dropdowns (Delegation for dynamically loaded nav)
        const dropdownBtn = e.target.closest('.nav-dropdown-btn');
        if (dropdownBtn) {
            e.stopPropagation();
            const dropdown = dropdownBtn.nextElementSibling; // .nav-dropdown-content
            if (dropdown) {
                dropdown.classList.toggle('show');
                // Close other dropdowns
                const notesDropdown = document.querySelector('.notes-dropdown-content');
                if (notesDropdown) notesDropdown.classList.remove('show');
            }
        }

        const notesBtn = e.target.closest('.notes-toggle-btn');
        if (notesBtn) {
            e.stopPropagation();
            const notesContent = notesBtn.nextElementSibling; // .notes-dropdown-content
            if (notesContent) {
                notesContent.classList.toggle('show');
                // Close tools dropdown
                const toolsDropdown = document.querySelector('.nav-dropdown-content');
                if (toolsDropdown) toolsDropdown.classList.remove('show');
            }
        }

        // Close dropdowns when clicking outside
        if (!e.target.closest('.nav-dropdown') && !e.target.closest('.notes-dropdown')) {
            const dropdowns = document.querySelectorAll('.nav-dropdown-content, .notes-dropdown-content');
            dropdowns.forEach(d => d.classList.remove('show'));
        }
    });
});


// Theme Logic
function toggleTheme() {
    currentTheme = currentTheme === 'gray' ? 'dark' : 'gray';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const icons = document.querySelectorAll('.theme-icon'); // Class for multiple icons (nav, etc)
    icons.forEach(icon => {
        icon.textContent = theme === 'gray' ? '☀️' : '🌙';
    });
    // Fallback for ID if class not used everywhere yet
    const idIcon = document.getElementById('themeIcon');
    if (idIcon) idIcon.textContent = theme === 'gray' ? '☀️' : '🌙';
}

// Language Logic
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Handle input placeholders if needed, but mostly textContent
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Handle data-i18n-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Handle data-i18n-title attribute
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[lang][key]) {
            el.setAttribute('title', translations[lang][key]);
        }
    });

    // Update title attributes for buttons
    const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');
    langToggleBtns.forEach(btn => {
        if (translations[lang]['lang_toggle_title']) {
            btn.setAttribute('title', translations[lang]['lang_toggle_title']);
        }
    });

    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
        if (translations[lang]['theme_toggle_title']) {
            btn.setAttribute('title', translations[lang]['theme_toggle_title']);
        }
    });

    updateLangIcon(lang);
}

function updateLangIcon(lang) {
    const icons = document.querySelectorAll('.lang-icon');
    icons.forEach(icon => {
        icon.textContent = lang === 'zh' ? 'EN' : '中';
    });
}

/**
 * Markdown2PDF Sync Scroll Feature
 * 
 * Provides smooth synchronized scrolling between the markdown editor and preview panel.
 * When the user scrolls the editor, the preview automatically scrolls to the corresponding position
 * with a smooth animation, creating a seamless editing experience.
 * 
 * Features:
 * - Smooth cubic ease-out animation (200ms duration)
 * - Dynamic target updates during continuous scrolling
 * - User preference persistence via localStorage
 * - Prevents circular scroll events
 * 
 * Usage:
 * - Call md2pdfSyncScroll.init() on page load to restore preferences
 * - Call md2pdfSyncScroll.toggle() when user toggles the sync scroll checkbox
 * - Call md2pdfSyncScroll.sync() when the editor scrolls
 */
const md2pdfSyncScroll = {
    /**
     * State Variables
     */
    syncScrollEnabled: true,

    // Tracks which side is currently driving the scroll: 'editor' or 'preview'
    // 'editor' = User is scrolling the editor
    // 'preview' = User is scrolling the preview
    currentDriver: null,

    // Timeout handle for clearing the driver lock
    driverTimeout: null,

    // Animation state
    animationId: null,
    targetScrollTop: null,

    /**
     * Initialize the feature
     */
    init: function () {
        // Restore preference
        const saved = localStorage.getItem('md2pdf_sync_scroll');
        if (saved !== null) {
            this.syncScrollEnabled = (saved === 'true');
        }

        const checkbox = document.getElementById('sync-scroll');
        if (checkbox) {
            checkbox.checked = this.syncScrollEnabled;
        }
    },

    /**
     * Toggle sync scroll feature on/off
     */
    toggle: function () {
        const checkbox = document.getElementById('sync-scroll');
        this.syncScrollEnabled = checkbox ? checkbox.checked : true;

        if (checkbox) {
            localStorage.setItem('md2pdf_sync_scroll', this.syncScrollEnabled);
        }

        if (!this.syncScrollEnabled) {
            this.cancelAnimation();
            this.clearDriver();
        }
    },

    /**
     * Set the current driver (lock)
     * @param {string} driver - 'editor' or 'preview'
     */
    setDriver: function (driver) {
        // If we are switching drivers, or renewing current driver
        if (this.driverTimeout) {
            clearTimeout(this.driverTimeout);
        }

        this.currentDriver = driver;

        // Release lock after scroll events stop (debounce)
        // 500ms to safely exceed the 200ms animation duration + buffer
        // This prevents the scroll events generated by animateTo from being interpreted as user input
        this.driverTimeout = setTimeout(() => {
            this.currentDriver = null;
        }, 500);
    },

    clearDriver: function () {
        if (this.driverTimeout) {
            clearTimeout(this.driverTimeout);
        }
        this.currentDriver = null;
    },

    cancelAnimation: function () {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    },

    /**
     * Sync preview scroll with editor scroll (Editor -> Preview)
     */
    sync: function () {
        if (!this.syncScrollEnabled) return;

        // If Preview is driving (user is scrolling preview), ignore this echo
        if (this.currentDriver === 'preview') return;

        // Lock as Editor
        this.setDriver('editor');

        const input = document.getElementById('markdown-input');
        const output = document.getElementById('preview-output');
        if (!input || !output) return;

        // Calculate percentage
        const inputScrollTop = input.scrollTop;
        const inputMaxScroll = input.scrollHeight - input.clientHeight;

        if (inputMaxScroll <= 0) return;

        const percentage = inputScrollTop / inputMaxScroll;

        // Calculate target
        const outputMaxScroll = output.scrollHeight - output.clientHeight;
        if (outputMaxScroll <= 0) return;

        const target = percentage * outputMaxScroll;

        // Animate
        this.animateTo(output, target);
    },

    /**
     * Sync editor scroll with preview scroll (Preview -> Editor)
     */
    syncReverse: function () {
        if (!this.syncScrollEnabled) return;

        // If Editor is driving (user is scrolling editor), ignore this echo
        if (this.currentDriver === 'editor') return;

        // Lock as Preview
        this.setDriver('preview');

        const input = document.getElementById('markdown-input');
        const output = document.getElementById('preview-output');
        if (!input || !output) return;

        // Calculate percentage
        const outputScrollTop = output.scrollTop;
        const outputMaxScroll = output.scrollHeight - output.clientHeight;

        if (outputMaxScroll <= 0) return;

        const percentage = outputScrollTop / outputMaxScroll;

        // Calculate target
        const inputMaxScroll = input.scrollHeight - input.clientHeight;
        if (inputMaxScroll <= 0) return;

        const target = percentage * inputMaxScroll;

        // Animate
        this.animateTo(input, target);
    },

    /**
     * Smooth scroll animation
     */
    animateTo: function (element, target) {
        this.targetScrollTop = target;

        // If already animating, just update target
        if (this.animationId) return;

        const start = element.scrollTop;
        const startTime = performance.now();
        const duration = 200; // ms

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Cubic ease-out
            const ease = 1 - Math.pow(1 - progress, 3);

            const currentTarget = this.targetScrollTop;
            element.scrollTop = start + (currentTarget - start) * ease;

            if (progress < 1 && Math.abs(element.scrollTop - currentTarget) > 0.5) {
                this.animationId = requestAnimationFrame(animate);
            } else {
                element.scrollTop = currentTarget;
                this.animationId = null;

                // Check if target moved while we were animating
                if (Math.abs(element.scrollTop - this.targetScrollTop) > 1) {
                    this.animationId = requestAnimationFrame(() => this.animateTo(element, this.targetScrollTop));
                }
            }
        };

        this.animationId = requestAnimationFrame(animate);
    }
};

// Ensure md2pdfSyncScroll is available globally
// This helps with cases where the script might be loaded in different contexts
if (typeof window !== 'undefined') {
    window.md2pdfSyncScroll = md2pdfSyncScroll;
}

// Global i18n function for use in other scripts
function i18n(key, params) {
    const lang = currentLang || 'zh';
    let text = translations[lang] && translations[lang][key] ? translations[lang][key] : key;

    // Simple parameter replacement: {count} -> value
    if (params) {
        for (const param in params) {
            text = text.replace(new RegExp('\\{' + param + '\\}', 'g'), params[param]);
        }
    }

    return text;
}

// Make i18n available globally
if (typeof window !== 'undefined') {
    window.i18n = i18n;
    window.currentLang = currentLang;
}
