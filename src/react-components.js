import Listing from "./Listing";
import MyComponent from "./MyComponent";

export default (editor) => {
  editor.Components.addType("MyComponent", {
    extend: "react-component",
    model: {
      defaults: {
        component: MyComponent,
        stylable: true,
        resizable: true,
        editable: true,
        draggable: true,
        droppable: true,
        attributes: {
          mlsid: "Default MLSID",
          editable: true
        },
        traits: [
          {
            type: "number",
            label: "MLS ID",
            name: "mlsid"
          }
        ]
      }
    },
    isComponent: (el) => el.tagName === "LISTING"
  });

  editor.BlockManager.add("My Component", {
    label: "<div class='gjs-fonts gjs-f-b1'>My Component</div>",
    category: "React Components",
    content: "<Listing></Listing>"
  });
};
