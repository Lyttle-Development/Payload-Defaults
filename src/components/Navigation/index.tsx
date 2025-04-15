'use client'
import React from 'react'
import { useConfig } from '@payloadcms/ui'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { GlobalEnabled, ModuleEnabled } from '../../constrant-types'
import { GLOBAL_ENABLED, MODULE_ENABLED } from '@/../constants'

const Navigation: React.FC = () => {
  const { config } = useConfig() ?? {}
  const collections = (config?.collections ?? []).filter(
    (c) => (c?.slug in MODULE_ENABLED && MODULE_ENABLED[c?.slug as keyof ModuleEnabled]) ?? false,
  )
  const globals = (config?.globals ?? []).filter(
    (g) => (g?.slug in GLOBAL_ENABLED && GLOBAL_ENABLED[g?.slug as keyof GlobalEnabled]) ?? false,
  )

  return (
    <nav className={styles.nav}>
      {collections?.length > 0 && (
        <>
          <h4 className={styles.group__title}>Collections</h4>
          <ul className={styles.list}>
            {collections.map((collection) => (
              <li key={collection.slug}
                  className={styles.list_item}>
                <a
                  href={`/admin/collections/${collection.slug}`}
                  className={classNames(styles.link, {
                    [styles.active as string]: window.location.pathname.startsWith(
                      '/admin/collections/' + collection.slug,
                    ),
                  })}
                >
                  {'' + collection.labels.plural}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {globals?.length > 0 && (
        <>
          <h4 style={{ padding: '1rem' }}>Globals</h4>
          <ul className={styles.list}>
            {globals
              .map((global) => (
                <li key={global.slug}
                    className={styles.list_item}>
                  <a
                    href={`/admin/globals/${global.slug}`}
                    className={classNames(styles.link, {
                      [styles.active as string]: window.location.pathname.startsWith(
                        '/admin/globals/' + global.slug,
                      ),
                    })}
                  >
                    {'' + global.label}
                  </a>
                </li>
              ))}
          </ul>
        </>
      )}
    </nav>
  )
}

export default Navigation
