import React from 'react';
import CommentSvg from './../../../assets/icons/comment.svg';

interface Props {
  onTouchEnd?: () => void;
}

export const CommentsIcon: React.FC<Props> = ({onTouchEnd}) => (
  <CommentSvg onTouchEnd={onTouchEnd} />
);
