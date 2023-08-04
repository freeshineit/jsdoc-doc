export function ListItem({ action, title, setClicked }: {
    action: ActionFun;
    title: string;
    setClicked: Function;
}): any;
export default List;
/**
 * 列表项操作回调
 */
export type ActionFun = (title?: string | undefined) => any;
/**
 * @description 列表
 * @param {Object} props List 组件props
 * @param {ActionFun} props.create 创建函数
 * @param {ActionFun} props.read 读函数
 * @param {ActionFun} props.update 更新函数
 * @param {ActionFun} props.destroy 销毁函数
 * @returns
 */
declare function List({ create, read, update, destroy }: {
    create: ActionFun;
    read: ActionFun;
    update: ActionFun;
    destroy: ActionFun;
}): any;
