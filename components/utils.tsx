'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { UI_SIZE_PLAYER, URLBACK } from '../env'
import { selectJwt } from '../lib/reducers/user'
import axios, { AxiosInstance } from 'axios'
import messageInteraction from './messageInteraction'
import { calculatePlayerDimensions } from '../utils/calculatePlayerDImentions'
import { ProjectState } from '../lib/types/projectTypes'

export function createAxios(jwt: string | undefined) {
  return axios.create({
    baseURL: URLBACK,
    headers: { Authorization: `Bearer ${jwt}` },
  })
}

export const useAxiosWithHeader = () => {
  const jwt = useSelector(selectJwt)
  return createAxios(jwt)
}

export function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}
