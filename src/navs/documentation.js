import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  '开始': [
    {
      title: '安装',
      href: '/docs/installation',
      match: /^\/docs\/(installation|guides)/,
    },
    // TODO: Add these pages
    // pages['tailwind-cli'],
    // { title: 'Play CDN', href: '#' },
    pages['editor-setup'],
    pages['using-with-preprocessors'],
    pages['optimizing-for-production'],
    pages['browser-support'],
    pages['upgrade-guide'],
  ],
  '核心概念': [
    pages['utility-first'],
    // TODO: Maybe write this page
    // pages['writing-your-html'],
    pages['hover-focus-and-other-states'],
    pages['responsive-design'],
    pages['dark-mode'],
    pages['reusing-styles'],
    pages['adding-custom-styles'],
    pages['functions-and-directives'],
  ],
  '定制': [
    pages['configuration'],
    pages['content-configuration'],
    // TODO: Remove + redirect to v2
    // pages['just-in-time-mode'],
    pages['theme'],
    pages['screens'],
    pages['customizing-colors'],
    pages['customizing-spacing'],
    // TODO: Redirect to v2
    // pages['configuring-variants'],
    pages['plugins'],
    pages['presets'],
  ],
  '基本样式': [pages['preflight']],
  '布局': [
    pages['aspect-ratio'],
    pages['container'],
    pages['columns'],
    pages['break-after'],
    pages['break-before'],
    pages['break-inside'],
    pages['box-decoration-break'],
    pages['box-sizing'],
    pages['display'],
    pages['float'],
    pages['clear'],
    pages['isolation'],
    pages['object-fit'],
    pages['object-position'],
    pages['overflow'],
    pages['overscroll-behavior'],
    pages['position'],
    pages['top-right-bottom-left'],
    pages['visibility'],
    pages['z-index'],
  ],
  '弹性框 & 网格': [
    pages['flex-basis'],
    pages['flex-direction'],
    pages['flex-wrap'],
    pages['flex'],
    pages['flex-grow'],
    pages['flex-shrink'],
    pages['order'],
    pages['grid-template-columns'],
    pages['grid-column'],
    pages['grid-template-rows'],
    pages['grid-row'],
    pages['grid-auto-flow'],
    pages['grid-auto-columns'],
    pages['grid-auto-rows'],
    pages['gap'],
    pages['justify-content'],
    pages['justify-items'],
    pages['justify-self'],
    pages['align-content'],
    pages['align-items'],
    pages['align-self'],
    pages['place-content'],
    pages['place-items'],
    pages['place-self'],
  ],
  '间距': [pages['padding'], pages['margin'], pages['space']],
  '尺寸': [
    pages['width'],
    pages['min-width'],
    pages['max-width'],
    pages['height'],
    pages['min-height'],
    pages['max-height'],
  ],
  '排版': [
    pages['font-family'],
    pages['font-size'],
    pages['font-smoothing'],
    pages['font-style'],
    pages['font-weight'],
    pages['font-variant-numeric'],
    pages['letter-spacing'],
    pages['line-clamp'],
    pages['line-height'],
    pages['list-style-image'],
    pages['list-style-position'],
    pages['list-style-type'],
    pages['text-align'],
    pages['text-color'],
    pages['text-decoration'],
    pages['text-decoration-color'],
    pages['text-decoration-style'],
    pages['text-decoration-thickness'],
    pages['text-underline-offset'],
    pages['text-transform'],
    pages['text-overflow'],
    pages['text-indent'],
    pages['vertical-align'],
    pages['whitespace'],
    pages['word-break'],
    pages['hyphens'],
    pages['content'],
  ],
  '背景': [
    pages['background-attachment'],
    pages['background-clip'],
    pages['background-color'],
    pages['background-origin'],
    pages['background-position'],
    pages['background-repeat'],
    pages['background-size'],
    pages['background-image'],
    pages['gradient-color-stops'],
  ],
  '边界': [
    pages['border-radius'],
    pages['border-width'],
    pages['border-color'],
    pages['border-style'],
    pages['divide-width'],
    pages['divide-color'],
    pages['divide-style'],
    pages['outline-width'],
    pages['outline-color'],
    pages['outline-style'],
    pages['outline-offset'],
    pages['ring-width'],
    pages['ring-color'],
    pages['ring-offset-width'],
    pages['ring-offset-color'],
  ],
  '影响': [
    pages['box-shadow'],
    pages['box-shadow-color'],
    pages['opacity'],
    pages['mix-blend-mode'],
    pages['background-blend-mode'],
  ],
  '过滤器': [
    pages['blur'],
    pages['brightness'],
    pages['contrast'],
    pages['drop-shadow'],
    pages['grayscale'],
    pages['hue-rotate'],
    pages['invert'],
    pages['saturate'],
    pages['sepia'],
    pages['backdrop-blur'],
    pages['backdrop-brightness'],
    pages['backdrop-contrast'],
    pages['backdrop-grayscale'],
    pages['backdrop-hue-rotate'],
    pages['backdrop-invert'],
    pages['backdrop-opacity'],
    pages['backdrop-saturate'],
    pages['backdrop-sepia'],
  ],
  '表': [
    pages['border-collapse'],
    pages['border-spacing'],
    pages['table-layout'],
    pages['caption-side'],
  ],
  '过渡和动画': [
    pages['transition-property'],
    pages['transition-duration'],
    pages['transition-timing-function'],
    pages['transition-delay'],
    pages['animation'],
  ],
  '转换': [
    pages['scale'],
    pages['rotate'],
    pages['translate'],
    pages['skew'],
    pages['transform-origin'],
  ],
  '交互性': [
    pages['accent-color'],
    pages['appearance'],
    pages['cursor'],
    pages['caret-color'],
    pages['pointer-events'],
    pages['resize'],
    pages['scroll-behavior'],
    pages['scroll-margin'],
    pages['scroll-padding'],
    pages['scroll-snap-align'],
    pages['scroll-snap-stop'],
    pages['scroll-snap-type'],
    pages['touch-action'],
    pages['user-select'],
    pages['will-change'],
  ],
  SVG: [pages['fill'], pages['stroke'], pages['stroke-width']],
  '可访问性': [pages['screen-readers']],
  '官方插件': [
    pages['typography-plugin'],
    {
      title: 'Forms',
      href: 'https://github.com/tailwindlabs/tailwindcss-forms',
    },
    {
      title: 'Aspect Ratio',
      href: 'https://github.com/tailwindlabs/tailwindcss-aspect-ratio',
    },
    {
      title: 'Container Queries',
      href: 'https://github.com/tailwindlabs/tailwindcss-container-queries',
    },
  ],
}
