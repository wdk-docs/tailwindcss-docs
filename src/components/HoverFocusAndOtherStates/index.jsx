import { highlightedCode } from './snippet.html?highlight'

export function HoverFocusAndOtherStates({
  property,
  utility,
  variant = 'hover',
  defaultClass,
  featuredClass,
  element = 'div',
  children,
}) {
  return (
    <>
      <p>
        顺风允许您使用可变修饰符有条件地在不同状态下应用实用程序类。 例如，使用{' '}
        <code>
          {variant}:{featuredClass}
        </code>{' '}
        仅在{variant}时应用<code>{featuredClass}</code>实用程序
      </p>
      {children || (
        <pre className="language-html">
          <code
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: highlightedCode
                .replace(/{element}/g, element)
                .replace('{defaultClass} ', defaultClass ? `${defaultClass} ` : '')
                .replace('{variant}', variant)
                .replace('{featuredClass}', featuredClass),
            }}
          />
        </pre>
      )}
      <p>
        有关所有可用状态修饰符的完整列表，请查看{' '}
        <a href="/docs/hover-focus-and-other-states">悬停、聚焦和其他状态</a>文档.
      </p>
    </>
  )
}
