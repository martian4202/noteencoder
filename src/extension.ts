import * as vscode from 'vscode';
import {NoteTaskProvider} from './noteTaskProvider';

let noteTaskProvider: vscode.Disposable | undefined;

export function activate(_context: vscode.ExtensionContext): void {
    let workspaceRoot = vscode.workspace.rootPath;
    if (!workspaceRoot) {
        return;
    }

    noteTaskProvider = vscode.tasks.registerTaskProvider(NoteTaskProvider.NoteType, new NoteTaskProvider(workspaceRoot));
}

export function deactivate(): void {
    if (noteTaskProvider) {
        noteTaskProvider.dispose();
    }
}

