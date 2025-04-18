import {
    Body,
    Color,
    I18n,
    ICurve,
    IDocument,
    IEdge,
    IShape,
    IShapeMeshData,
    LineType,
    Matrix4,
    Ray,
    Result,
    ShapeType,
    XYZ,
} from "chili-core";

export class TestEdge implements IEdge {
    constructor(readonly start: XYZ, readonly end: XYZ) {}

    intersect(other: IEdge | Ray): XYZ[] {
        return [];
    }
    length(): number {
        return this.start.distanceTo(this.end);
    }
    asCurve(): Result<ICurve, string> {
        return Result.error("this");
    }
    get id(): string {
        return "testEdge";
    }
    shapeType: ShapeType = ShapeType.Edge;
    setMatrix(matrix: Matrix4): void {}
    get mesh(): IShapeMeshData {
        return {
            shape: this,
            edges: {
                positions: [this.start.x, this.start.y, this.start.z, this.end.x, this.end.y, this.end.z],
                color: Color.fromRGB(1.0, 0, 0),
                lineType: LineType.Solid,
                groups: [],
            },
            faces: undefined,
        };
    }
    toJson(): string {
        return "json";
    }
    isEqual(other: IShape): boolean {
        if (other instanceof TestEdge) {
            return this.start.isEqualTo(other.start) && this.end.isEqualTo(other.end);
        }
        return false;
    }
}

export class TestBody extends Body {
    name: keyof I18n = "body.line";
    constructor(document: IDocument, readonly start: XYZ, readonly end: XYZ) {
        super(document);
    }

    protected generateShape(): Result<IShape> {
        return Result.ok(new TestEdge(this.start, this.end));
    }

    override setMatrix(matrix: Matrix4): void {
        throw new Error("Method not implemented.");
    }
}
