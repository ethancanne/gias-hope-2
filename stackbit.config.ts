import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs', // Replace with your static site generator if different
  nodeVersion: '16',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/',
      },
      contentDirs: ['content/posts', 'content/pages'],
      models: [
        {
          name: 'post',
          type: 'page',
          filePath: 'content/posts/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'image', type: 'image' },
            { name: 'date', type: 'datetime' },
            { name: 'author', type: 'string' },
            { name: 'category', type: 'string' },
            { name: 'content', type: 'markdown' },
          ],
        },
        {
          name: 'homePage',
          type: 'page',
          filePath: 'content/pages/home-page.md',
          fields: [
            {
              name: 'pageInformation',
              type: 'object',
              fields: [
                { name: 'title', type: 'string' },
                { name: 'link', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'desktopPageImage', type: 'image' },
                { name: 'mobilePageImage', type: 'image' },
                { name: 'isHidden', type: 'boolean' },
                { name: 'hasButton', type: 'boolean' },
                {
                  name: 'buttonType',
                  type: 'enum',
                  options: ['yellow', 'green'],
                },
                { name: 'order', type: 'number' },
              ],
            },
            {
              name: 'whoWeAreData',
              type: 'object',
              fields: [
                { name: 'text', type: 'markdown' },
                {
                  name: 'featuredImages',
                  type: 'list',
                  items: {
                    type: 'object',
                    fields: [
                      { name: 'src', type: 'image' },
                      { name: 'alt', type: 'string' },
                    ],
                  },
                },
              ],
            },
            {
              name: 'verseData',
              type: 'object',
              fields: [
                { name: 'text', type: 'string' },
                { name: 'reference', type: 'string' },
              ],
            },
            { name: 'whoIsGiannaText', type: 'markdown' },
            { name: 'ourVisionText', type: 'markdown' },
            {
              name: 'howYouCanHelpData',
              type: 'object',
              fields: [
                { name: 'text', type: 'markdown' },
                { name: 'donateLink', type: 'string' },
                {
                  name: 'images',
                  type: 'list',
                  items: {
                    type: 'object',
                    fields: [
                      { name: 'src', type: 'image' },
                      { name: 'alt', type: 'string' },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'ourImpactPage',
          type: 'page',
          filePath: 'content/pages/our-impact-page.md',
          fields: [
            {
              name: 'pageInformation',
              type: 'object',
              fields: [
                { name: 'title', type: 'string' },
                { name: 'link', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'desktopPageImage', type: 'image' },
                { name: 'mobilePageImage', type: 'image' },
                { name: 'isHidden', type: 'boolean' },
                { name: 'hasButton', type: 'boolean' },
                {
                  name: 'buttonType',
                  type: 'enum',
                  options: ['yellow', 'green'],
                },
                { name: 'order', type: 'number' },
              ],
            },
            {
              name: 'featuredData',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'text', type: 'string' },
                  { name: 'number', type: 'number' },
                ],
              },
            },
            {
              name: 'detailsData',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string' },
                  { name: 'description', type: 'markdown' },
                  { name: 'image', type: 'image' },
                  { name: 'link', type: 'string' },
                ],
              },
            },
          ],
        },
        {
          name: 'whatWeDoPage',
          type: 'page',
          filePath: 'content/pages/what-we-do-page.md',
          fields: [
            {
              name: 'pageInformation',
              type: 'object',
              fields: [
                { name: 'title', type: 'string' },
                { name: 'link', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'desktopPageImage', type: 'image' },
                { name: 'mobilePageImage', type: 'image' },
                { name: 'isHidden', type: 'boolean' },
                { name: 'hasButton', type: 'boolean' },
                {
                  name: 'buttonType',
                  type: 'enum',
                  options: ['yellow', 'green'],
                },
                { name: 'order', type: 'number' },
              ],
            },
            {
              name: 'visionsData',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string' },
                  { name: 'icon', type: 'string' },
                  { name: 'id', type: 'string' },
                  { name: 'description', type: 'string' },
                  { name: 'backgroundImage', type: 'image' },
                  { name: 'backgroundColor', type: 'string' },
                ],
              },
            },
          ],
        },
        {
          name: 'ourStoryPage',
          type: 'page',
          filePath: 'content/pages/our-story-page.md',
          fields: [
            {
              name: 'pageInformation',
              type: 'object',
              fields: [
                { name: 'title', type: 'string' },
                { name: 'link', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'desktopPageImage', type: 'image' },
                { name: 'mobilePageImage', type: 'image' },
                { name: 'isHidden', type: 'boolean' },
                { name: 'hasButton', type: 'boolean' },
                {
                  name: 'buttonType',
                  type: 'enum',
                  options: ['yellow', 'green'],
                },
                { name: 'order', type: 'number' },
              ],
            },
            {
              name: 'storyBlocks',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string', required: false },
                  { name: 'header', type: 'string', required: false },
                  { name: 'content', type: 'markdown' },
                  { name: 'image', type: 'image', required: false },
                  { name: 'coloredBlock', type: 'boolean', required: false },
                  { name: 'reversedBlock', type: 'boolean', required: false },
                ],
              },
            },
          ],
        },
        {
          name: 'applyForGrantPage',
          type: 'page',
          filePath: 'content/pages/apply-for-a-grant-page.md',
          fields: [
            {
              name: 'pageInformation',
              type: 'object',
              fields: [
                { name: 'title', type: 'string' },
                { name: 'link', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'desktopPageImage', type: 'image' },
                { name: 'mobilePageImage', type: 'image' },
                { name: 'isHidden', type: 'boolean' },
                { name: 'hasButton', type: 'boolean' },
                {
                  name: 'buttonType',
                  type: 'enum',
                  options: ['yellow', 'green'],
                },
                { name: 'order', type: 'number' },
              ],
            },
            {
              name: 'grantInformationData',
              type: 'object',
              fields: [
                { name: 'description', type: 'markdown' },
                { name: 'guidelines', type: 'markdown' },
                { name: 'image', type: 'image' },
              ],
            },
            {
              name: 'grantSettings',
              type: 'object',
              fields: [
                { name: 'isOpen', type: 'boolean' },
                { name: 'deadline', type: 'datetime' },
              ],
            },
            {
              name: 'grantFormFields',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'label', type: 'string' },
                  {
                    name: 'name',
                    type: 'string',
                    pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$',
                  },
                  {
                    name: 'type',
                    type: 'enum',
                    options: ['text', 'email', 'phone', 'date', 'textarea'],
                  },
                  { name: 'required', type: 'boolean' },
                ],
              },
            },
          ],
        },
        {
          name: 'postsPage',
          type: 'page',
          filePath: 'content/pages/posts-page.md',
          fields: [
            {
              name: 'pageInformation',
              type: 'object',
              fields: [
                { name: 'title', type: 'string' },
                { name: 'link', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'desktopPageImage', type: 'image' },
                { name: 'mobilePageImage', type: 'image' },
                { name: 'isHidden', type: 'boolean' },
                { name: 'hasButton', type: 'boolean' },
                {
                  name: 'buttonType',
                  type: 'enum',
                  options: ['yellow', 'green'],
                },
                { name: 'order', type: 'number' },
              ],
            },
            {
              name: 'postsList',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string' },
                  { name: 'excerpt', type: 'string' },
                  { name: 'date', type: 'datetime' },
                  { name: 'author', type: 'string' },
                  { name: 'image', type: 'image' },
                  { name: 'slug', type: 'string' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],

  siteMap: ({ documents, models }) => {
    // 1. Filter all page models
    const pageModels = models.filter((m) => m.type === 'page');

    return (
      documents
        // 2. Filter all documents which are of a page model
        .filter((d) => pageModels.some((m) => m.name === d.modelName))
        // 3. Map each document to a SiteMapEntry
        .map((document) => {
          // Map the model name to its corresponding URL
          const urlModel = (() => {
            switch (document.modelName) {
              case 'Page':
                return 'otherPage';
              case 'Blog':
                return 'otherBlog';
              default:
                return null;
            }
          })();

          return {
            stableId: document.id,
            urlPath: `/${urlModel}/${document.id}`,
            document,
            isHomePage: false,
          };
        })
        .filter(Boolean) as SiteMapEntry[]
    );
  },
});
