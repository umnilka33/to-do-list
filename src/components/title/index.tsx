import React from 'react'
import { TitleProps } from '../../common/types';

import './title.css';

const Title = ({ title = 'Simple title' }:TitleProps) => (
    <h1 className="title">{title}</h1>
);

export default Title;
