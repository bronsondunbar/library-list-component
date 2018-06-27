import React, { Fragment } from 'react'
import classNames from 'classnames'
import DOMPurify from 'dompurify'

import './style.css'

const ListComponent = ({ listData, listStyleType, listAlign, listInline, subListStyleType }) => {

  let listClass = classNames ({
    'list-display-inline': listInline == true,
    'list-align-left': listAlign == 'left',
    'list-align-center': listAlign == 'center',
    'list-align-right': listAlign == 'right',
    'list-style-type-circle': listStyleType == 'circle',
    'list-style-type-decimal': listStyleType == 'decimal',
    'list-style-type-alpha': listStyleType == 'alpha',
    'list-style-type-roman': listStyleType == 'roman'
  })

  let subListClass = classNames ({
    'list-style-type-default': subListStyleType == 'default',
    'list-style-type-circle': subListStyleType == 'circle',
    'list-style-type-decimal': subListStyleType == 'decimal',
    'list-style-type-alpha': subListStyleType == 'alpha',
    'list-style-type-roman': subListStyleType == 'roman'
  })

  return (
    <div>
      <ul className={listClass}>
        {listData.map((data, index) => {
          return (
            <Fragment>
              <li key={index}>{data.data}</li>
              <ul className={subListClass}>
              {data.content != undefined
                ? data.content.map((test, index) => {
                    return (
                      <li key={index}>{test.data}</li>
                    )
                  })
                : null
              }
              </ul>
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default ListComponent