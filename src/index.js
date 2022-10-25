import "./styles.css";
import "bootstrap";
import "bootstrap-css";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ColorPlugin from "editorjs-text-color-plugin";
import edjsHTML from "editorjs-html";

const editor = new EditorJS({
  holderId: "editorJS",
  tools: {
    header: {
      class: Header
    },
    list: {
      class: List
    },
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    },
    Color: {
      class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
      config: {
        colorCollections: [
          "#FF1300",
          "#EC7878",
          "#9C27B0",
          "#673AB7",
          "#3F51B5",
          "#0070FF",
          "#03A9F4",
          "#00BCD4",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFF"
        ],
        defaultColor: "#FF1300",
        type: "text"
      }
    }
  }
});

let btnSaves = document.getElementById("btnSaves");
btnSaves.addEventListener("click", () => {
  editor.save().then((outputData) => {
    const edjsParser = edjsHTML();

    let html = edjsParser.parse(outputData);

    console.log(html);

    console.log(outputData);
  });
});

let btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", () => {
  editor.clear();
});
