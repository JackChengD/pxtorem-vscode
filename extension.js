// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const postcss = require("postcss");
const pxtorem = require("postcss-pxtorem");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "pxtorem" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let pxtoremDc = vscode.commands.registerCommand('extension.pxtorem', function () {
		// The code you place here will be executed every time your command is executed
		const doc = vscode.window.activeTextEditor.document;
		const text = doc.getText();
		const options = {
			rootValue: 10,
			unitPrecision: 5,
			propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'padding', 'margin'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0,
		}
		const processedCss = postcss(pxtorem(options)).process(text).css;
		const start = new vscode.Position(0, 0);
		const end = new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);
		selection = new vscode.Range(start, end); // 整个css代码
		//替换文件内容
		vscode.window.activeTextEditor.edit(builder => {
			builder.replace(selection, processedCss);
		})
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from pxtorem!');
	});

	context.subscriptions.push(pxtoremDc);

	let showInfo = vscode.commands.registerCommand('extension.showInfo', () => { //注册命令

		vscode.window.showInformationMessage('Wow ! This is so cool!');
	});

	context.subscriptions.push(showInfo);

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}