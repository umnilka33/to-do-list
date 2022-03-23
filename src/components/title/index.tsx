import React from 'react'
import { TitleProps } from './title';

import './title.css';

const Title = ({ title = 'Simple title' }:TitleProps) => (
    <h1 className="title">{title}</h1>
);

export default Title;
