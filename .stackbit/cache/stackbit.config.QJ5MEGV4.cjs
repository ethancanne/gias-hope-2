"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.js
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  // Replace with your static site generator if different
  nodeVersion: "16",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/Users/ethancannelongo/Desktop/Projects/code/new-gias-hope",
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      },
      contentDirs: ["content/posts", "content/pages"],
      models: [
        {
          name: "post",
          type: "page",
          filePath: "content/posts/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "image", type: "image" },
            { name: "date", type: "datetime" },
            { name: "author", type: "string" },
            { name: "category", type: "string" },
            { name: "content", type: "markdown" }
          ]
        },
        {
          name: "homePage",
          type: "page",
          filePath: "content/pages/home-page.md",
          fields: [
            {
              name: "pageInformation",
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "link", type: "string" },
                { name: "description", type: "string" },
                { name: "desktopPageImage", type: "image" },
                { name: "mobilePageImage", type: "image" },
                { name: "isHidden", type: "boolean" },
                { name: "hasButton", type: "boolean" },
                {
                  name: "buttonType",
                  type: "enum",
                  options: ["yellow", "green"]
                },
                { name: "order", type: "number" }
              ]
            },
            {
              name: "whoWeAreData",
              type: "object",
              fields: [
                { name: "text", type: "markdown" },
                {
                  name: "featuredImages",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "src", type: "image" },
                      { name: "alt", type: "string" }
                    ]
                  }
                }
              ]
            },
            {
              name: "verseData",
              type: "object",
              fields: [
                { name: "text", type: "string" },
                { name: "reference", type: "string" }
              ]
            },
            { name: "whoIsGiannaText", type: "markdown" },
            { name: "ourVisionText", type: "markdown" },
            {
              name: "howYouCanHelpData",
              type: "object",
              fields: [
                { name: "text", type: "markdown" },
                { name: "donateLink", type: "string" },
                {
                  name: "images",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "src", type: "image" },
                      { name: "alt", type: "string" }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          name: "ourImpactPage",
          type: "page",
          filePath: "content/pages/our-impact-page.md",
          fields: [
            {
              name: "pageInformation",
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "link", type: "string" },
                { name: "description", type: "string" },
                { name: "desktopPageImage", type: "image" },
                { name: "mobilePageImage", type: "image" },
                { name: "isHidden", type: "boolean" },
                { name: "hasButton", type: "boolean" },
                {
                  name: "buttonType",
                  type: "enum",
                  options: ["yellow", "green"]
                },
                { name: "order", type: "number" }
              ]
            },
            {
              name: "featuredData",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "text", type: "string" },
                  { name: "number", type: "number" }
                ]
              }
            },
            {
              name: "detailsData",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string" },
                  { name: "description", type: "markdown" },
                  { name: "image", type: "image" },
                  { name: "link", type: "string" }
                ]
              }
            }
          ]
        },
        {
          name: "whatWeDoPage",
          type: "page",
          filePath: "content/pages/what-we-do-page.md",
          fields: [
            {
              name: "pageInformation",
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "link", type: "string" },
                { name: "description", type: "string" },
                { name: "desktopPageImage", type: "image" },
                { name: "mobilePageImage", type: "image" },
                { name: "isHidden", type: "boolean" },
                { name: "hasButton", type: "boolean" },
                {
                  name: "buttonType",
                  type: "enum",
                  options: ["yellow", "green"]
                },
                { name: "order", type: "number" }
              ]
            },
            {
              name: "visionsData",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string" },
                  { name: "icon", type: "string" },
                  { name: "id", type: "string" },
                  { name: "description", type: "string" },
                  { name: "backgroundImage", type: "image" },
                  { name: "backgroundColor", type: "string" }
                ]
              }
            }
          ]
        },
        {
          name: "ourStoryPage",
          type: "page",
          filePath: "content/pages/our-story-page.md",
          fields: [
            {
              name: "pageInformation",
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "link", type: "string" },
                { name: "description", type: "string" },
                { name: "desktopPageImage", type: "image" },
                { name: "mobilePageImage", type: "image" },
                { name: "isHidden", type: "boolean" },
                { name: "hasButton", type: "boolean" },
                {
                  name: "buttonType",
                  type: "enum",
                  options: ["yellow", "green"]
                },
                { name: "order", type: "number" }
              ]
            },
            {
              name: "storyBlocks",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string", required: false },
                  { name: "header", type: "string", required: false },
                  { name: "content", type: "markdown" },
                  { name: "image", type: "image", required: false },
                  { name: "coloredBlock", type: "boolean", required: false },
                  { name: "reversedBlock", type: "boolean", required: false }
                ]
              }
            }
          ]
        },
        {
          name: "applyForGrantPage",
          type: "page",
          filePath: "content/pages/apply-for-a-grant-page.md",
          fields: [
            {
              name: "pageInformation",
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "link", type: "string" },
                { name: "description", type: "string" },
                { name: "desktopPageImage", type: "image" },
                { name: "mobilePageImage", type: "image" },
                { name: "isHidden", type: "boolean" },
                { name: "hasButton", type: "boolean" },
                {
                  name: "buttonType",
                  type: "enum",
                  options: ["yellow", "green"]
                },
                { name: "order", type: "number" }
              ]
            },
            {
              name: "grantInformationData",
              type: "object",
              fields: [
                { name: "description", type: "markdown" },
                { name: "guidelines", type: "markdown" },
                { name: "image", type: "image" }
              ]
            },
            {
              name: "grantSettings",
              type: "object",
              fields: [
                { name: "isOpen", type: "boolean" },
                { name: "deadline", type: "datetime" }
              ]
            },
            {
              name: "grantFormFields",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "label", type: "string" },
                  {
                    name: "name",
                    type: "string"
                  },
                  {
                    name: "type",
                    type: "enum",
                    options: ["text", "email", "phone", "date", "textarea"]
                  },
                  { name: "required", type: "boolean" }
                ]
              }
            }
          ]
        },
        {
          name: "postsPage",
          type: "page",
          filePath: "content/pages/posts-page.md",
          fields: [
            {
              name: "pageInformation",
              type: "object",
              fields: [
                { name: "title", type: "string" },
                { name: "link", type: "string" },
                { name: "description", type: "string" },
                { name: "desktopPageImage", type: "image" },
                { name: "mobilePageImage", type: "image" },
                { name: "isHidden", type: "boolean" },
                { name: "hasButton", type: "boolean" },
                {
                  name: "buttonType",
                  type: "enum",
                  options: ["yellow", "green"]
                },
                { name: "order", type: "number" }
              ]
            },
            {
              name: "postsList",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "title", type: "string" },
                  { name: "excerpt", type: "string" },
                  { name: "date", type: "datetime" },
                  { name: "author", type: "string" },
                  { name: "image", type: "image" },
                  { name: "slug", type: "string" }
                ]
              }
            }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === "page");
    return documents.filter((d) => pageModels.some((m) => m.name === d.modelName)).map((document) => {
      const urlModel = (() => {
        switch (document.modelName) {
          case "Page":
            return "otherPage";
          case "Blog":
            return "otherBlog";
          default:
            return null;
        }
      })();
      return {
        stableId: document.id,
        urlPath: `/${urlModel}/${document.id}`,
        document,
        isHomePage: false
      };
    }).filter(Boolean);
  }
});
//# sourceMappingURL=stackbit.config.QJ5MEGV4.cjs.map
