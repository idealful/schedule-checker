const members = {
  columns: [
    {
      key: 'seq',
      val: '순번',
    },
    { key: 'userEmail', val: '이메일' },
    {
      key: 'userName',
      val: '이름',
    },
    { key: 'userGrade', val: '회원등급' },
    { key: 'userGradeVal', val: '회원등급(값)' },
    { key: 'registerDate', val: '가입일시' },
    { key: 'registerStatus', val: '가입상태' },
    { key: 'registerStatusVal', val: '가입상태(값)' },
  ],
  dataList: [
    {
      seq: 6,
      userEmail: 'idealful@gmail.com',
      userName: 'test2',
      userPassword: '1',
      userGrade: 99,
      userGradeVal: '관리자',
      registerDate: '2022-06-08 23:59:59',
      registerStatus: '2',
      registerStatusVal: '승인',
    },
    {
      seq: 5,
      userEmail: 'test1',
      userName: 'test1',
      userPassword: '1',
      userGrade: 1,
      userGradeVal: '일반',
      registerDate: '2022-06-08 23:59:59',
      registerStatus: '2',
      registerStatusVal: '승인',
    },
    {
      seq: 4,
      userEmail: 'seokcheon.kang@bespinglobal.com',
      userName: '강*천',
      userPassword: '1',
      userGrade: 1,
      userGradeVal: '일반',
      registerDate: '2022-05-03 23:59:59',
      registerStatus: '2',
      registerStatusVal: '승인',
    },
    {
      seq: 3,
      userEmail: 'heeyeon.jeon@bespinglobal.com',
      userName: '전*연',
      userPassword: '1',
      userGrade: 1,
      userGradeVal: '일반',
      registerDate: '2022-05-03 23:59:59',
      registerStatus: '2',
      registerStatusVal: '승인',
    },
    {
      seq: 2,
      userEmail: 'yunbeom.kim@bespinglobal.com',
      userName: '김*범',
      userPassword: '1',
      userGrade: 99,
      userGradeVal: '관리자',
      registerDate: '2022-05-03 23:59:59',
      registerStatus: '2',
      registerStatusVal: '승인',
    },
    {
      seq: 1,
      userEmail: 'sanghoon.yun@bespinglobal.com',
      userName: '윤*훈',
      userPassword: '1',
      userGrade: 99,
      userGradeVal: '관리자',
      registerDate: '2022-05-03 23:59:59',
      registerStatus: '2',
      registerStatusVal: '승인',
    },
  ],
};

const service = {
  getMembers: () => {
    return members;
  },
  getMemberByUserEmail: (userEmail) => {
    return members.dataList.find((member) => member.userEmail === userEmail);
  },
  getMember: (userEmail, userPassword) => {
    return members.dataList.find((member) => member.userEmail === userEmail && member.userPassword === userPassword);
  },
};

module.exports = service;