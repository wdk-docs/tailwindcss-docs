import { highlightedCode } from './snippet.html?highlight'

export function BreakpointsAndMediaQueries({
  defaultClass,
  featuredClass,
  element = 'div',
  children,
}) {
  return (
    <>
      <p>
        您还可以使用变体修饰符来针对媒体查询，如响应断点、暗模式、prefers-reduced-motion等。
        例如，使用<code>md:{featuredClass}</code>仅在中等及以上屏幕尺寸上应用<code>{featuredClass}</code>实用工具。
      </p>
      {children || (
        <pre className="language-html">
          <code
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: highlightedCode
                .replace(/{element}/g, element)
                .replace('{defaultClass} ', defaultClass ? `${defaultClass} ` : '')
                .replace('{featuredClass}', featuredClass),
            }}
          />
        </pre>
      )}
      <p>
        要了解更多信息，请查看{' '}
        <a href="/docs/responsive-design">响应式设计</a>{' '}
        <a href="/docs/dark-mode">黑暗的模式</a> 和{' '}
        <a href="/docs/hover-focus-and-other-states#media-queries">其他媒体查询修饰符</a>文档.
      </p>
    </>
  )
}
