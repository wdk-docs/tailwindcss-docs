import NextLink from 'next/link'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: '将Play CDN脚本添加到HTML中',
    body: () => (
      <p>
        将Play CDN脚本标签添加到HTML文件的<code>&lt;head&gt;</code>，并开始使用Tailwind的实用程序类来样式化您的内容。
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
>   <h1 class="text-3xl font-bold underline">
>     Hello world!
>   </h1>
  </body>
  </html>`,
    },
  },
  {
    title: '尝试自定义您的配置',
    body: () => (
      <p>
        编辑<code>tailwind.config</code>对象{' '}
        <NextLink href="/docs/configuration">自定义配置</NextLink> 用你自己的设计标记。
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
>   <script>
>     tailwind.config = {
>       theme: {
>         extend: {
>           colors: {
>             clifford: '#da373d',
>           }
>         }
>       }
>     }
>   </script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline **text-clifford**">
      Hello world!
    </h1>
  </body>
  </html>`,
    },
  },
  {
    title: '尝试添加一些自定义CSS',
    body: () => (
      <p>
        使用<code>type="text/tailwindcss"</code>添加支持所有Tailwind CSS功能的自定义CSS。
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
>   <style type="text/tailwindcss">
>     @layer utilities {
>       .content-auto {
>         content-visibility: auto;
>       }
>     }
>   </style>
  </head>
  <body>
>   <div class="lg:content-auto">
      <!-- ... -->
    </div>
  </body>
  </html>`,
    },
  },
  {
    title: '尝试使用第一方插件',
    body: () => (
      <p>
        使用<code>plugins</code>查询参数启用第一方插件，如表单和排版。
      </p>
    ),
    code: {
      name: 'index.html',
      lang: 'html',
      code: `  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
  </head>
  <body>
>   <div class="prose">
      <!-- ... -->
    </div>
  </body>
  </html>`,
    },
  },
]

export default function PlayCdn({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark"
      >
        <h3 className="sr-only">Play CDN</h3>
        <p>
          使用Play CDN在浏览器中试用顺风，无需任何构建步骤。
          Play CDN仅用于开发目的，并不是生产的最佳选择。
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
    </InstallationLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

PlayCdn.layoutProps = {
  meta: {
    title: '尝试顺风CSS使用播放CDN',
    description: '使用Play CDN在浏览器中试用顺风，无需任何构建步骤。',
    section: '开始',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
