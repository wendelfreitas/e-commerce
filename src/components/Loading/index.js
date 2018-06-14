import React from 'react';
import { Spinner } from './styles';
import LoadingIcon from '../../assets/images/loading.png';

const Loading = () => <Spinner src={LoadingIcon} alt="Carregando..." />;

export default Loading;
