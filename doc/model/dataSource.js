export const generateColumns =(h)=>{
  return [{
    title: 'UID',
    dataIndex: 'uid',
    key: 'uid',
    visible:true,
    width:60,
  },{
    title: '下发状态',
    dataIndex: 'status',
    key: 'status',
    visible:true,
    width:60,
    customRender: (text, row, index,) => {
      return  <div >关闭</div>;
    }
  },
    {
      title: 'PUSHID',
      dataIndex: 'pushId',
      key: 'pushId',
      visible:true,
      width:60,
      customRender: (text, row, index,) => {
        return (<multiple-text line="3">
            Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
            </multiple-text>);
      }
    },
    {
      title: '执行反馈',
      dataIndex: 'msgStatus',
      key: 'msgStatus',
      visible:true,
      width:200,
      customRender: (text, row, index,) => {
        return "执行成功"
      }
    },
    {
      title: '下发时间',
      dataIndex: 'upTime',
      key: 'upTime',
      visible:true,
      width:100
    },
    {
      title: '推送时间',
      dataIndex: 'createTime',
      key: 'createTime',
      visible:true,
      width:100
    }
  ]
}

