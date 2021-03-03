export const formItemLayout = (col = { label: 8, wrapper: 16 }) => ({
  labelCol: {
    xs: { span: 24 },
    sm: { span: col.label },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: col.wrapper },
  },
});

export const tableData = {
  dataSource: [],
  current: 1,
  pageSize: 10,
  total: 0,
};

export const refreshData = (state: any, { payload }: any) => ({
  ...state,
  ...(payload || {}),
});
