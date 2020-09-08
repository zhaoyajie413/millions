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
            今年7月份，东京奥组委首席执行官武藤敏郎表示，2021年的奥运会很有可能限制观众人数，但将尽量避免无观众模式。此外，奥运会将精简开闭幕式，并削减各国代表和工作人员的数量。原本有超过1.1万运动员计划参加东京奥运会，但由于日本目前仍对大多数国家关闭国境，具体有多少运动员能最终成行尚未可知。武藤还补充道，“如果有足够的疫苗当然很好，但我们没有说过没有疫苗就不会办奥运会，这不是一个先决条件”。
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

