// Copyright 2022-2023 the Chili authors. All rights reserved. MPL-2.0 license.

import { Application, IDocument, PubSub, IService, Logger, Lazy, INode } from "chili-core";
import { CircleBody, LineBody } from "../bodys";
import { EditorEventHandler, LineEditorEventHandler } from "../editors";
import { CircleEditorEventHandler } from "../editors/circleEditor";

export class EditorService implements IService {
    private static readonly _lazy = new Lazy(() => new EditorService());

    static get instance() {
        return this._lazy.value;
    }

    private handler?: EditorEventHandler;

    register(_app: Application): void {
        Logger.info(`${EditorService.name} registed`);
    }

    start(): void {
        PubSub.default.sub("selectionChanged", this.handleSelectionChanged);
        Logger.info(`${EditorService.name} started`);
    }

    stop(): void {
        PubSub.default.remove("selectionChanged", this.handleSelectionChanged);
        Logger.info(`${EditorService.name} stoped`);
    }

    private handleSelectionChanged = (document: IDocument, models: INode[]) => {
        if (this.handler !== undefined) {
            this.handler.dispose();
            this.handler = undefined;
        }
        if (models.length > 0) {
            this.handler = this.getEventHandler(document, models);
            if (this.handler !== undefined) {
                document.visual.eventHandler = this.handler;
            }
        } else {
            document.visual.resetEventHandler();
        }
        document.visual.viewer.redraw();
    };

    private getEventHandler(document: IDocument, models: INode[]): EditorEventHandler | undefined {
        if (models.length > 1) return undefined;
        if (INode.isModelNode(models[0])) {
            let body = models[0].body;
            if (body instanceof LineBody) {
                return new LineEditorEventHandler(document, body);
            } else if (body instanceof CircleBody) {
                return new CircleEditorEventHandler(document, body);
            }
        }
        return undefined;
    }
}
