// Copyright 2022-2023 the Chili authors. All rights reserved. MPL-2.0 license.

export type I18n = Record<Keys, string>;

type Keys =
    | "common.name"
    | "common.matrix"
    | "common.normal"
    | "common.confirm"
    | "common.cancel"
    | "body.line"
    | "body.rect"
    | "body.circle"
    | "body.box"
    | "body.polygon"
    | "ribbon.tab.file"
    | "ribbon.tab.draw"
    | "ribbon.tab.startup"
    | "ribbon.group.draw"
    | "ribbon.group.modify"
    | "ribbon.group.selection"
    | "items.header"
    | "items.tool.newFolder"
    | "items.tool.expandAll"
    | "items.tool.unexpandAll"
    | "items.tool.delete"
    | "properties.header"
    | "properties.multivalue"
    | "properties.group.transform"
    | "model.translation"
    | "model.rotation"
    | "model.scale"
    | "model.visible"
    | "vertex.point"
    | "line.start"
    | "line.end"
    | "circle.center"
    | "circle.radius"
    | "box.dx"
    | "box.dy"
    | "box.dz"
    | "rect.dx"
    | "rect.dy"
    | "command.save"
    | "command.open"
    | "command.delete"
    | "command.redo"
    | "command.newGroup"
    | "command.newFolder"
    | "command.undo"
    | "command.line"
    | "command.box"
    | "command.circle"
    | "command.rect"
    | "command.move"
    | "command.copy"
    | "command.mirror"
    | "command.array"
    | "command.rotate"
    | "command.polygon"
    | "operate.pickFistPoint"
    | "operate.pickNextPoint"
    | "operate.pickCircleCenter"
    | "operate.pickRadius"
    | "snap.end"
    | "snap.mid"
    | "snap.center"
    | "snap.intersection"
    | "snap.perpendicular"
    | "axis.x"
    | "axis.y"
    | "axis.z"
    | "prompt.default"
    | "prompt.select.models"
    | "prompt.select.noModelSelected"
    | "error.default"
    | "error.input.unsupportedInputs"
    | "error.input.invalidNumber"
    | "error.input.threeNumberCanBeInput"
    | "error.input.cannotInputANumber";
