<template>
  <div class="awards" style="width:900px;margin:0 auto">
    <div style="padding:10px">
      <slide-verify
        :l="42"
        :r="10"
        :w="310"
        :h="155"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
        :slider-text="'向右滑动'"
      ></slide-verify>
    </div>
    <Card shadow>
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        奖项设置
      </p>
      <div slot="extra">
        <Button type="info" @click.prevent.native="updateAwardFun('add')"
          >添加</Button
        >
      </div>
      <div class="l-table">
        <Table
          border
          :columns="awardData.columns"
          :data="awardData.data"
        ></Table>
      </div>
    </Card>

    <Card shadow>
      <p slot="title">
        <Icon type="md-people"></Icon>
        参与人员列表(共{{ joinMemberData.data.length }}人)
      </p>
      <div slot="extra">
        <Button type="info" @click.prevent.native="updateMemberFun('add')"
          >添加</Button
        >
      </div>
      <div class="l-table">
        <Table
          border
          :columns="joinMemberData.columns"
          :data="joinMemberData.showdata"
        ></Table>
      </div>
      <div class="pageToolbar">
        <Page
          :total="joinMemberData.total"
          show-elevator
          show-sizer
          show-total
          placement="top"
          :current.sync="joinMemberData.offset"
          :page-size-opts="joinMemberData.pageSize"
          :page-size="joinMemberData.limit"
          @on-change="
            val => {
              this.pagingChange(val, joinMemberData);
            }
          "
          @on-page-size-change="
            val => {
              this.pagesizeChange(val, joinMemberData);
            }
          "
        ></Page>
      </div>
    </Card>

    <!--奖励 添加编辑模态框start -->
    <Modal
      v-model="awardData.popMadol.show"
      :mask-closable="false"
      width="800"
      height="500"
      @on-cancel="closeHandle('formValidate')"
    >
      <p slot="header">
        <Icon type="md-information-circle" style="color:#19be6b;"></Icon>
        <span>{{
          `${awardData.popMadol.type === "add" ? "添加" : "编辑"}`
        }}</span>
      </p>
      <div class="modal-content">
        <Form
          ref="formValidate"
          :model="awardData.popMadol.data"
          :rules="formValidate"
          label-position="right"
          :label-width="120"
        >
          <FormItem label="名称：" prop="name">
            <Input
              placeholder="请输入名称"
              type="text"
              v-model="awardData.popMadol.data.name"
            />
          </FormItem>
          <FormItem label="数量：" prop="count">
            <Input
              placeholder="请输入数量"
              type="text"
              v-model="awardData.popMadol.data.count"
            />
          </FormItem>
          <FormItem label="奖品：" prop="award">
            <Input
              placeholder="请输入奖品"
              type="text"
              v-model="awardData.popMadol.data.award"
            />
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="success" @click="saveHandle('formValidate')">确定</Button>
        <Button type="info" @click="closeHandle('formValidate')">取消</Button>
      </div>
    </Modal>
    <!--奖励 添加编辑模态框end -->

    <!--参与人员 添加编辑模态框start -->
    <Modal
      v-model="joinMemberData.popMadol.show"
      :mask-closable="false"
      width="800"
      height="500"
      @on-cancel="closeHandle('joinMemberDataDOM')"
    >
      <p slot="header">
        <Icon type="md-information-circle" style="color:#19be6b;"></Icon>
        <span>{{
          `${joinMemberData.popMadol.type === "add" ? "添加" : "编辑"}`
        }}</span>
      </p>
      <div class="modal-content">
        <Form
          ref="joinMemberDataDOM"
          :model="joinMemberData.popMadol.data"
          :rules="joinMemberDataDOM"
          label-position="right"
          :label-width="120"
        >
          <FormItem label="姓名：" prop="name">
            <Input
              placeholder="请输入姓名"
              type="text"
              v-model="joinMemberData.popMadol.data.name"
            />
          </FormItem>
          <FormItem label="工号：" prop="count">
            <Input
              placeholder="请输入数量"
              type="text"
              v-model="joinMemberData.popMadol.data.id"
            />
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="success" @click="saveHandle('joinMemberDataDOM')"
          >确定</Button
        >
        <Button type="info" @click="closeHandle('joinMemberDataDOM')"
          >取消</Button
        >
      </div>
    </Modal>
    <!--参与人员 添加编辑模态框end -->
  </div>
</template>

<script>
import { getMemberData, getPrizeData } from "@/mock/index";
import slideVerify from "@/components/slide-Verify";
import { setTimeout } from "timers";
export default {
  name: "setting",
  data() {
    return {
      awardData: {
        columns: [],
        data: [],
        popMadol: {
          type: "",
          key: "",
          data: {
            key: "",
            name: "",
            count: "",
            award: ""
          },
          show: false
        }
      },
      joinMemberData: {
        columns: [],
        data: [],
        showdata: [],
        total: 0,
        offset: 1,
        limit: 20,
        pageSize: [20, 50, 100, 200, 500],
        popMadol: {
          type: "",
          key: "",
          data: {
            key: "",
            name: "",
            id: ""
          },
          show: false
        }
      },
      formValidate: {
        // 验证
        name: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        // count:[
        //     { required: true, type: 'number', message: '数量不能为空', trigger: 'blur' }
        // ],
        award: [
          { required: true, message: "奖品名称不能为空", trigger: "blur" }
        ]
      },
      joinMemberDataDOM: {
        // 验证
        name: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        id: [{ required: true, message: "奖品名称不能为空", trigger: "blur" }]
      }
    };
  },
  components: { slideVerify },
  created() {
    this.initDataConfig();
  },
  methods: {
    // 初始化操作类
    // 初始化
    initDataConfig() {
      this.initTableColumn();
      this.initTableData();
    },
    // 初始化表头
    initTableColumn() {
      let awardDataColumns = [],
        joinMemberDataColumns = [];

      awardDataColumns = [
        {
          type: "selection",
          width: 60,
          align: "center",
          fixed: "left",
          resizable: true
        },
        { title: "名称", key: "name", align: "center", resizable: true },
        { title: "数量", key: "count", align: "center", resizable: true },
        { title: "奖品", key: "award", align: "center", resizable: true },

        // { title: "奖品", key:'award', align:'center',
        //     render:(h,params)=>{
        //       return h('div',{
        //           // 加class
        //           class:{
        //             foo: true,
        //             baz: false
        //           },
        //             // 设置样式
        //           style:{
        //               color:'red',
        //               fontSize:'20px',
        //           },
        //           // attrs用来写除了style和class之外的属性或正常的html上的属性
        //           attrs:{
        //             id:'foo',
        //             src:'4399.com'
        //           },
        //           // domProps 用来写原生的DOM属性
        //           domProps:{
        //               innerHTML:'<span style="color: blue;font-size: 45px;"> 我被替换了</span>'
        //           },
        //           // 监听事件
        //           on:{
        //               click:()=>{
        //                   console.log('我被点击了')
        //               }
        //           },
        //           // 组件props
        //           props:{
        //               myProp: 'bar'    // 想子组件传递消息
        //           }
        //       })
        //     }
        // },

        // { title: "奖品", key:'award', align:'center',
        //     render:(h,params)=>{
        //         // String
        //         return h('div',params.row.award);

        //         // Array 里面再创建子节点
        //         return h('div',[
        //             h('button','编辑'),
        //             h('button','删除'),
        //         ])
        //     }
        // },

        {
          title: "操作",
          key: "action",
          width: 160,
          align: "center",
          fixed: "right",
          resizable: true,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: { type: "primary", size: "small" },
                  style: { marginRight: "5px" },
                  on: {
                    click: () => {
                      this.updateAwardFun("edit", params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: { type: "error", size: "small" },
                  style: { marginRight: "5px" },
                  on: {
                    click: () => {
                      this.deleteAwardFun(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ];

      joinMemberDataColumns = [
        {
          type: "selection",
          width: 60,
          align: "center",
          fixed: "left",
          resizable: true
        },
        { title: "姓名", key: "name", align: "center", resizable: true },
        { title: "工号", key: "id", align: "center", resizable: true },
        {
          title: "操作",
          key: "action",
          width: 160,
          align: "center",
          fixed: "right",
          resizable: true,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: { type: "primary", size: "small" },
                  style: { marginRight: "5px" },
                  on: {
                    click: () => {
                      this.updateMemberFun("edit", params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: { type: "error", size: "small" },
                  style: { marginRight: "5px" },
                  on: {
                    click: () => {
                      this.deleteMemberFun(params.row);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ];

      this.$set(this.awardData, "columns", awardDataColumns);
      this.$set(this.joinMemberData, "columns", joinMemberDataColumns);
    },
    // 初始化表格数据
    initTableData() {
      let localstorage = this.localstorage;
      let prizeData = [],
        memberData = [];

      localstorage.fetch("menber").length
        ? (memberData = localstorage.fetch("menber"))
        : (memberData = getMemberData);
      localstorage.fetch("prize").length
        ? (prizeData = localstorage.fetch("prize"))
        : (prizeData = getPrizeData);
      this.$set(this.awardData, "data", prizeData);
      this.$set(this.joinMemberData, "data", memberData);

      this.initPageTableShow(this.joinMemberData);

      this.saveDataCommitFn([
        { key: "prize", value: this.awardData.data },
        { key: "menber", value: this.joinMemberData.data }
      ]);
    },
    // vux提交保存数据
    saveDataCommitFn(data) {
      this.$store.commit("saveLocalstorage", data);
    },
    // 分页
    // 表格分页初始化
    initPageTableShow(listdata) {
      this.$set(listdata, "total", listdata.data.length);
      if (listdata.data.length < listdata.limit) {
        this.$set(listdata, "showdata", listdata.data);
      } else {
        this.$set(listdata, "showdata", listdata.data.slice(0, listdata.limit));
      }
    },
    // 分页显示数据
    changepage(listdata) {
      let _start = (listdata.offset - 1) * listdata.limit,
        _end = listdata.offset * listdata.limit;
      this.$set(listdata, "showdata", listdata.data.slice(_start, _end));
    },
    // 分页点击选择
    pagingChange(page, listdata) {
      this.$set(listdata, "offset", page);
      this.changepage(listdata);
    },
    // 分页操作 获取条数
    pagesizeChange(pageSize, listdata) {
      this.$set(listdata, "limit", pageSize);
      if (listdata.offset === 1) this.pagingChange(1, listdata);
    },
    // 奖项增删改查操作
    // 添加、编辑奖项操作
    updateAwardFun(type, row) {
      let awardDataPop = this.awardData.popMadol;
      this.$set(awardDataPop, "type", type);
      this.$set(awardDataPop, "show", true);
      if (type === "edit") {
        let newData = {
          name: row.name,
          count: row.count,
          award: row.award
        };
        this.$set(awardDataPop, "data", newData);
        this.$set(awardDataPop, "key", `${row.name}${row.award}`);
      }
    },
    // 删除奖项操作
    deleteAwardFun(row) {
      this.$Modal.confirm({
        title: "提示！",
        content: "<p>是否要删除这条数据？</p>",
        onOk: () => {
          setTimeout(() => {
            let awardData = this.awardData.data;
            awardData.forEach((item, index) => {
              if (
                `${item["name"]}${item["award"]}` ===
                `${row["name"]}${row["award"]}`
              ) {
                awardData.splice(index, 1);
              }
            });
            this.saveDataCommitFn([
              { key: "prize", value: this.awardData.data }
            ]);
            this.$Message.success("删除成功!");
          }, 300);
        }
      });
    },
    // 保存关闭操作
    // 保存奖项操作
    saveHandle(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if (name === "formValidate") {
            let awardData = this.awardData.data;
            let awardDataPop = this.awardData.popMadol;
            let datas = this.awardData.popMadol.data;
            if (awardDataPop.type === "edit" && awardDataPop.key) {
              awardData.forEach((item, index) => {
                if (`${item["name"]}${item["award"]}` == awardDataPop.key) {
                  awardData.splice(index, 1, datas); // 替换
                }
              });
            } else if (awardDataPop.type === "add") {
              awardData.push(datas);
            }
            this.$set(this.awardData, "data", awardData);

            this.saveDataCommitFn([
              { key: "prize", value: this.awardData.data }
            ]);
            (awardData = null), (awardDataPop = null), (datas = null);
          } else if (name === "joinMemberDataDOM") {
            let memberData = this.joinMemberData.data;
            let memberDataPop = this.joinMemberData.popMadol;
            let datas = this.joinMemberData.popMadol.data;
            if (memberDataPop.type === "edit" && memberDataPop.key) {
              memberData.forEach((item, index) => {
                if (item["id"] == memberDataPop.key) {
                  memberData.splice(index, 1, datas); // 替换
                }
              });
            } else if (memberDataPop.type === "add") {
              memberData.push(datas);
            }
            this.$set(this.joinMemberData, "data", memberData);

            this.saveDataCommitFn([
              { key: "menber", value: this.joinMemberData.data }
            ]);
            (memberData = null), (memberDataPop = null), (datas = null);
          }
          this.initTableData();
          this.closeHandle(name);
        } else {
          this.$Message.error("验证失败!");
        }
      });
    },
    // 关闭Modal弹窗 取消操作
    closeHandle(name) {
      this.$refs[name].resetFields();
      this.$set(this.awardData.popMadol, "show", false);
      this.$set(this.awardData.popMadol, "key", "");
      this.$set(this.joinMemberData.popMadol, "show", false);
      this.$set(this.joinMemberData.popMadol, "key", "");
    },

    // 参与人员增删改查操作
    // 添加、编辑参与人员操作
    updateMemberFun(type, row) {
      let memberDataPop = this.joinMemberData.popMadol;
      this.$set(memberDataPop, "type", type);
      this.$set(memberDataPop, "show", true);
      if (type === "edit") {
        let newData = {
          name: row.name,
          id: row.id
        };
        this.$set(memberDataPop, "data", newData);
        this.$set(memberDataPop, "key", `${row.id}`);
      }
    },
    // 删除参与人员操作
    deleteMemberFun(row) {
      this.$Modal.confirm({
        title: "提示！",
        content: "<p>是否要删除这条数据？</p>",
        onOk: () => {
          setTimeout(() => {
            let joinMemberData = this.joinMemberData.data;
            joinMemberData.forEach((item, index) => {
              if (`${item["id"]}` === `${row["id"]}`) {
                joinMemberData.splice(index, 1);
              }
            });
            this.saveDataCommitFn([
              { key: "menber", value: this.joinMemberData.data }
            ]);
            this.$Message.success("删除成功!");
            this.initTableData();
          }, 300);
        }
      });
    },

    // 滑块方法
    // 验证成功
    onSuccess() {
      this.$Message.success("验证通过，即将跳转");
      this.$router.replace({ path: "/lucky" }); // 跳转
    },
    onFail() {
      this.$Message.error("验证失败，请重试");
    },
    onRefresh() {
      this.$Message.warning("请重新开始验证");
    }
  }
};
</script>

<style>
.pageToolbar {
  text-align: right;
  margin-top: 10px;
}
</style>
