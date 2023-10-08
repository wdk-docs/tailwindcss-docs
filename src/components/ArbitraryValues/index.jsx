import { highlightedCode } from './snippet.html?highlight'

export function ArbitraryValues({
  property,
  name,
  defaultClass,
  featuredClass,
  hasTheme = true,
  element = 'div',
  children,
}) {
  const nameOrProperty = name ? (
    name
  ) : (
    <>
      <code>{property}</code> value
    </>
  )

  return (
    <>
      {hasTheme ? (
        <p>
          如果你需要使用一次性的{nameOrProperty}，而这个{nameOrProperty}在你的主题中是没有意义的，那么使用方括号来使用任意的值动态地生成一个属性。
        </p>
      ) : (
        <p>
          如果你需要使用一次性的{nameOrProperty}，默认情况下它不包含在Tailwind中，请使用方括号使用任意值动态生成属性。
        </p>
      )}
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
        在任意值文档中了解更多关于{' '}
        <a href="/docs/adding-custom-styles#using-arbitrary-values">任意值</a>支持的信息。 
      </p>
    </>
  )
}
