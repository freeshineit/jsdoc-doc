import React, { useState } from 'react';

/**
 * 列表项操作回调
 * @callback ActionFun
 * @param {string=} title - 标题
 */

/**
 * @description 列表项
 * @param {Object} props
 * @param {ActionFun} props.action 操作函数
 * @param {string} props.title 标题内容
 * @param {Function} props.setClicked
 */
export const ListItem = ({ action, title, setClicked }) => {
  return (
    <li>
      <button
        onClick={() => {
          setClicked(title);
          action(title);
        }}
        className="my-button"
      >
        {title}
      </button>
    </li>
  );
};

/**
 * @description 列表
 * @param {Object} props List 组件props
 * @param {ActionFun} props.create 创建函数
 * @param {ActionFun} props.read 读函数
 * @param {ActionFun} props.update 更新函数
 * @param {ActionFun} props.destroy 销毁函数
 * @returns
 */
const List = ({ create, read, update, destroy }) => {
  /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} */
  const [clicked, setClicked] = useState('');

  return (
    <div>
      <hl>The last clicked button is {clicked}</hl>
      <ul>
        <ListItem title="Create" action={create} setClicked={setClicked} />
        <ListItem title="Read" action={read} setClicked={setClicked} />
        <ListItem title="Update" action={update} setClicked={setClicked} />
        <ListItem title="Destroy" action={destroy} setClicked={setClicked} />
      </ul>
    </div>
  );
};

export default List;
