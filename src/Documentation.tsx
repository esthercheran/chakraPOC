import React, { useEffect, useMemo, useState } from 'react'

import metadata from './figmaTokensChakra/$metadata.json'
import lightTokens from './documentationTokens/light.json'
import darkTokens from './documentationTokens/dark.json'

interface DocumentationComponentProps {
  value: string
  variant: string
  tokenName: string
}

export function Documentation({ set = 'core/color', path = '', theme = 'light', render }: { set?: string; path?: string; theme?: string; render: (data: any) => JSX.Element }) {
  const [data, setData] = useState<Record<string, any>>()
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadData() {
      try {
        if (metadata.tokenSetOrder.includes(set)) {
          const data = await import(`./figmaTokensChakra/${set}.js`)
          setData(data.default)
        } else {
          setError(`Token set not found: ${set}. No such path found in metadata.json`)
        }
      } catch (error) {
        setError(JSON.stringify(error))
      }
    }

    loadData()
  }, [set])

  const jsonData = useMemo(() => {
    if (data) {
      const themeFile: Record<string, any> = theme === 'light' ? lightTokens : darkTokens
      if (path) {
        const pathData = path.split('.').reduce((object, key) => object[key], themeFile)

        if (!pathData) {
          setError(`Cannot find tokens in path: ${path}`)
        } else {
          return pathData
        }
      } else {
        const themeData: Record<string, any> = {}
        Object.keys(data).forEach((key) => {
          themeData[key] = themeFile[key] || {}
        })

        return themeData || {}
      }
    }
    return {}
  }, [data, path, theme])

  const tokenData = useMemo(() => {
    const tokenData: DocumentationComponentProps[] = []
    const getTokenData = (data: Record<string, any>, path = ''): any => {
      Object.keys(data).forEach((key) => {
        let tokenPath = path
        if ('value' in data[key]) {
          const tokenName = tokenPath ? `${tokenPath}.${key}` : key
          const variant = data[key].type as string
          const value = data[key].value as string
          tokenData.push({
            variant,
            value,
            tokenName
          })
        } else {
          tokenPath = tokenPath ? `${tokenPath}.${key}` : `${key}`
          return getTokenData(data[key], tokenPath)
        }
      })
    }
    getTokenData(jsonData)

    return tokenData
  }, [jsonData])

  if (error) {
    return <h3>{error}</h3>
  }

  return render(tokenData)
}
