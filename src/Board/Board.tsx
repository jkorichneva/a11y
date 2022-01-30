import React from 'react';
import Header from '../../utils/components/Header/Header';
import BoardGrid from '../../utils/components/BoardGrid/BoardGrid';
import boardData from '../../mocks/board';
import translate from '../../utils/dictionary';
import { AppCtx } from '../../pages/_app';

export default function Board(): JSX.Element {
  const context = React.useContext(AppCtx);
  return (
    <div style={{ backgroundColor: boardData.backgroundColor }}>
      <Header tag="h1" size="lg">{translate('Board page', context.language)}</Header>
      <BoardGrid data={boardData} />
    </div>
  );
}
