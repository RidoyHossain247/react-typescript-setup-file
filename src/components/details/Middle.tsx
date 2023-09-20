import { Box } from '@mui/material';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { cartListData, data, reletedData } from '../../fack-data';
import HistoryCard from '../cards/HistoryCard';
import SendForm from './SendForm';
const Middle = () => {

  const { id } = useParams()
  const { pathname } = useLocation()
  const useParamsId = Number(id)

  const filterItem = data.filter((item) => item.id === useParamsId)
  const filterList = cartListData.filter((item) => item.id === useParamsId)
  const filterReletedData = reletedData.filter((item) => item.id === useParamsId)

  const filterRoute = pathname.split('/')[1]

  return (
    <Box position={'relative'} height={'100%'}>
      {filterRoute == 'details' && <HistoryCard heading2={filterItem[0].heading2} title2={filterItem[0].title2} />}
      {filterRoute == 'chart-list' && <HistoryCard heading2={filterList[0].heading2} title2={filterList[0].title2} />}
      {filterRoute == 'releted' && <HistoryCard heading2={filterReletedData[0].heading2} title2={filterReletedData[0].title2} />}
      <Box>
        <SendForm />
      </Box>
    </Box>
  )
}

export default Middle
