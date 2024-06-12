"use client";

import { TransactionType } from '@/lib/types';
import React from 'react'


interface Props {
    type: TransactionType;
}

function CategoryPicker({type} : Props) {
  return <div>CategoryPicker</div>;
}

export default CategoryPicker;