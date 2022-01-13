<template>
  <div class="xc-kyc">
    <h1 class="xc-kyc-name"> <span class="xc-kyc-name-border">{{ i18n.t('身份认证（KYC）') }}</span>  </h1>
    <banner type="basic" />
    <div class="xc-kyc-section">
      <div class="xc-kyc-section-left">
        <el-form ref="formEl" :model="basicForm" class="xc-kyc-form" :rules="rules">
          <div class="xc-kyc-form-section">
            <h2 class="xc-kyc-title"> <span class="xc-kyc-title-bg">{{ i18n.t('个人资料') }}</span> </h2>
            <div class="xc-kyc-row">
              <div class="xc-kyc-item">

                <h3 class="xc-kyc-subtitle">{{ i18n.t('称谓') }}</h3>
                <el-form-item prop="title">
                  <el-select v-model="basicForm.title" :placeholder="i18n.t('请选择一项')">
                    <el-option :label="i18n.t('先生')" value="1" />
                    <el-option :label="i18n.t('女士')" value="2" />
                    <el-option :label="i18n.t('太太')" value="3" />
                    <el-option :label="i18n.t('小姐')" value="4" />
                    <el-option :label="i18n.t('博士')" value="5" />
                    <el-option :label="i18n.t('教授')" value="6" />
                  </el-select>
                </el-form-item>
                
              </div>
            </div>
            <div class="xc-kyc-row">
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('名字') }}</h3>
                <el-form-item prop="lastName">
                  <el-input v-model="basicForm.lastName" :maxlength="100" :placeholder="i18n.t('请输入您的名')" />
                </el-form-item>
              </div>
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('姓氏') }}</h3>
                <el-form-item prop="firstName">
                  <el-input v-model="basicForm.firstName" :maxlength="100" :placeholder="i18n.t('请输入您的姓')" />
                </el-form-item>
              </div>
            </div>
            <div class="xc-kyc-row">
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('英文名') }}</h3>
                <el-form-item prop="englishLastName">
                  <el-input v-model="basicForm.englishLastName" :maxlength="100" :placeholder="i18n.t('请输入您的英文名')" />
                </el-form-item>
              </div>
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('英文姓') }}</h3>
                <el-form-item prop="englishFirstName">
                  <el-input v-model="basicForm.englishFirstName" :maxlength="100" :placeholder="i18n.t('请输入您的英文姓')" />
                </el-form-item>
              </div>
            </div>
            <div class="xc-kyc-row">
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('其他名字') }}</h3>
                <el-form-item prop="otherName">
                  <el-input v-model="basicForm.otherName" :maxlength="100" :placeholder="i18n.t('请输入您的其他名字')" /></el-form-item>
              </div>
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('曾用名') }}</h3>
                <el-form-item prop="onceName">
                  <el-input v-model="basicForm.onceName" :maxlength="100" :placeholder="i18n.t('请输入您的曾用名')" />
                </el-form-item>
              </div>
            </div>
            <div class="xc-kyc-row">
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('电话号码') }}</h3>
                <div class="xc-kyc-item-flex">
                  <phone-code :phone-code="basicForm.phoneArea" @change-code="changeAreaCode" />
                  <el-form-item prop="phone" style="flex: 1; margin-left: 20px;">
                    <el-input v-model.number="basicForm.phone" :maxlength="11" :placeholder="i18n.t('请输入您的电话号码')" />
                  </el-form-item>
                </div>
              </div>
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('出生日期') }}</h3>
                <el-form-item prop="birthday">
                  <el-date-picker v-model="basicForm.birthday" :picker-options="dateOptionBirthDay" type="date" value-format="yyyy-MM-dd" :placeholder="i18n.t('选择日期')" style="width: 100%;" />
                </el-form-item>
              </div>
            </div>
          </div>
          <div class="xc-kyc-form-section">
            <h2 class="xc-kyc-title"> <span class="xc-kyc-title-bg">{{ i18n.t('税务明细') }}</span> </h2>
            <div v-for="(item,index) in basicForm.jurisdictions" :key="index" class="xc-kyc-row">
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('司法管辖区') }}</h3>
                <el-form-item :prop="'jurisdictions.' + index + '.place'" :rules="{required:true,message:$t('请选择司法管辖区'), trigger: ['blur','change']}">
                  <county-selector :iso3="item.place?item.place:''" :placeholder="i18n.t('请选择司法管辖区')" @change-nation="function (nation){changeJurisdictionsNation(nation,item,index);}" />
                </el-form-item>
              </div>
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('税务编号') }}</h3>
                <el-form-item :prop="'jurisdictions.' + index + '.taxNo'" :rules="{required:true,message:$t('请输入您的税务编号'), trigger: ['blur','change']}">
                  <el-input v-model="item.taxNo" :maxlength="100" :placeholder="i18n.t('请输入您的税务编号')" />
                </el-form-item>
                <span v-if="basicForm.jurisdictions.length>1" class="xc-kyc-delete" @click="deleteTaxInput(index)">  <i class="el-icon-delete"></i> </span>
              </div>
            </div>
            <div class="xc-kyc-addtax-btn" @click="addTaxInputs"> <i class="el-icon-plus"></i> {{ i18n.t('添加税务参考消息') }}</div>
          </div>
          <div class="xc-kyc-form-section">
            <h2 class="xc-kyc-title"> <span class="xc-kyc-title-bg">{{ i18n.t('身份证件详情') }}</span> </h2>
            <div class="xc-kyc-row">
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('证件类型') }}</h3>
                <el-form-item prop="certificateType">
                  <el-select v-model="basicForm.certificateType" :placeholder="i18n.t('请选择证件类型')">
                    <el-option :label="i18n.t('香港身份证')" value="1" />
                    <el-option :label="i18n.t('护照')" value="2" />
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <div v-if="basicForm.certificateType == 1">
              <div class="xc-kyc-row">
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('香港身份证号码') }}</h3>
                  <el-form-item prop="certificateNo">
                    <el-input v-model="basicForm.certificateNo" :maxlength="20" :placeholder="i18n.t('请输入身份证号码')" />
                  </el-form-item>
                </div>
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('出生地') }}</h3>
                  <el-form-item prop="bornRegion">
                    <county-selector :iso3="basicForm.bornRegion?basicForm.bornRegion:''" :placeholder="i18n.t('请选择出生地')" @change-nation="changeBornNation" />
                  </el-form-item>
                </div>
              </div>
              <div class="xc-kyc-row">
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('证件发行日期') }}</h3>
                  <el-form-item prop="publishDate">
                    <el-date-picker v-model="basicForm.publishDate" :picker-options="dateOption1" type="date" value-format="yyyy-MM-dd" :placeholder="i18n.t('选择日期')" style="width: 100%;" />
                  </el-form-item>
                </div>
              </div>
            </div>
            <div v-if="basicForm.certificateType == 2">
              <div class="xc-kyc-row">
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('发行国家或地区') }}</h3>
                  <el-form-item prop="publishRegion">
                    <county-selector :iso3="basicForm.publishRegion?basicForm.publishRegion:''" :placeholder="i18n.t('请选择发行国家或地区')" @change-nation="changePublishNation" />
                  </el-form-item>
                </div>
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('出生地') }}</h3>
                  <el-form-item prop="bornRegion">
                    <county-selector :placeholder="i18n.t('请选择出生地')" :iso3="basicForm.bornRegion || ''" @change-nation="changeBornNation" />
                  </el-form-item>
                </div>
              </div>
              <div class="xc-kyc-row">
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('护照号码') }}</h3>
                  <el-form-item prop="certificateNo">
                    <el-input v-model="basicForm.certificateNo" :maxlength="20" :placeholder="i18n.t('请输入护照号码')" />
                  </el-form-item>
                </div>
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('国籍') }}</h3>
                  <el-form-item prop="nationality">
                    <county-selector :placeholder="i18n.t('请选择国籍')" :iso3="basicForm.nationality || ''" @change-nation="changeNationality" />
                  </el-form-item>
                </div>
              </div>
              <div class="xc-kyc-row">
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('证件发行日期') }}</h3>
                  <el-form-item prop="publishDate">
                    <el-date-picker v-model="basicForm.publishDate" :picker-options="dateOption1" type="date" value-format="yyyy-MM-dd" :placeholder="i18n.t('选择日期')" style="width: 100%;" />
                  </el-form-item>
                </div>
                <div class="xc-kyc-item">
                  <h3 class="xc-kyc-subtitle">{{ i18n.t('证件到期日期') }}</h3>
                  <el-form-item prop="expireDate">
                    <el-date-picker v-model="basicForm.expireDate" :picker-options="dateOption2" type="date" value-format="yyyy-MM-dd" :placeholder="i18n.t('选择日期')" style="width: 100%;" />
                  </el-form-item>
                </div>
              </div>
            </div>
            <h3 class="xc-kyc-title-withsquare">{{ basicForm.certificateType == 1 ? i18n.t('请上传完整的身份证件页面'): $t('请上传完整的护照证件页面') }} <span class="color-a cursor-pointor" @click="openDialog(Number(basicForm.certificateType))">{{ i18n.t('示例及格式要求') }}</span></h3>
            <upload :biz-type="3" :images="basicForm.certificateMaterialFile?basicForm.certificateMaterialFile.split(','):[]" @change="uploadCertificateMaterialFile" />
            <p v-if="certificateMaterialFileError.length > 0" class="xc-kyc-tip-red">{{ certificateMaterialFileError }}</p>
            <h3 class="xc-kyc-title-withsquare">{{ basicForm.certificateType == 1 ? i18n.t('请上传手持身份证件自拍照') : $t('请上传手持护照自拍照') }}  <span class="color-a cursor-pointor" @click="openDialog(Number(basicForm.certificateType) + 2)">{{ i18n.t('示例及格式要求') }}</span>
              <p class="xc-kyc-tip-red">{{ i18n.t('请正对镜头，呈现清晰脸型轮廓，表情自然，双眼睁开，并附带纸条，写明本日日期') }}</p>
            </h3>
            <upload :biz-type="3" :images="basicForm.certificateMaterialSelfieFile?basicForm.certificateMaterialSelfieFile.split(','):[]" @change="uploadCertificateMaterialSelfieFile" />
            <p v-if="certificateMaterialSelfieFileError.length > 0" class="xc-kyc-tip-red">{{ certificateMaterialSelfieFileError }}</p>
          </div>
          <div class="xc-kyc-form-section">
            <h2 class="xc-kyc-title"> <span class="xc-kyc-title-bg">{{ i18n.t('地址详情') }}</span> </h2>
            <div class="xc-kyc-item">
              <h3 class="xc-kyc-subtitle">{{ i18n.t('地址详情') }}</h3>
              <el-form-item prop="residentAddress">
                <el-input v-model="basicForm.residentAddress" :maxlength="100" :placeholder="i18n.t('请输入地址详情')" />
              </el-form-item>
            </div>
            <div class="xc-kyc-row">
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('居住国家或地区') }}</h3>
                <el-form-item prop="residentNation">
                  <county-selector :placeholder="i18n.t('请选择居住国家或地区')" :iso3="basicForm.residentNation || ''" @change-nation="changeResidentNation" />
                </el-form-item>
              </div>
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('省/州') }}</h3>
                <el-form-item prop="residentProvince">
                  <el-input v-model="basicForm.residentProvince" :maxlength="100" :placeholder="i18n.t('请输入省/州')" />
                </el-form-item>
              </div>

            </div>
            <div class="xc-kyc-row">
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('城市') }}</h3>
                <el-form-item prop="residentCity">
                  <el-input v-model="basicForm.residentCity" :maxlength="100" :placeholder="i18n.t('请输入城市')" />
                </el-form-item>
              </div>
              <div class="xc-kyc-item">
                <h3 class="xc-kyc-subtitle">{{ i18n.t('邮政编码') }}</h3>
                <el-form-item prop="residentZip">
                  <el-input v-model="basicForm.residentZip" :maxlength="100" :placeholder="i18n.t('请输入邮政编码')" />
                </el-form-item>
              </div>
            </div>
            <h3 class="xc-kyc-title-withsquare">{{ i18n.t('个人住址证明') }}  <span class="color-a cursor-pointor" @click="openDialog(5)">{{ i18n.t('示例及格式') }}</span>  
              <p class="xc-kyc-tip-red">{{ i18n.t('我们接受过去3个月内的银行账单/水电费单/税单。不接受邮政信箱/手机移动账单/驾驶执照作为地址证明。') }}</p>
            </h3>
            <upload :biz-type="3" :images="basicForm.residentMaterialFile?basicForm.residentMaterialFile.split(','):[]" @change="uploadResidentMaterialFile" />
            <p v-if="residentMaterialFileError.length > 0" class="xc-kyc-tip-red">{{ residentMaterialFileError }}</p>
          
          </div>
          <div class="xc-kyc-buttons">
            <next-link to="/assets/kyc/prepare">
              <el-button plain size="large" class="button-larger">{{ i18n.t('返回') }}</el-button>
            </next-link>
            <el-button type="primary" class="button-larger" size="large" :loading="isLoading" @click="submitForm">{{ i18n.t('下一步') }}</el-button>
          </div>
          <demo-dialog :show-dialog="showDialog" :demo-type="demoType" @closeDialog="showDialog=false" />
        </el-form>
      </div>
      <div class="xc-kyc-section-right">
        <right-menu :step="2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, useStore, ref, watch, useMeta, useContext, useRouter } from '@nuxtjs/composition-api'
import $http from '@/utils/http'
import RightMenu from '~/components/kyc/Menu.vue'
import PhoneCode from '~/components/common/PhoneCodeSelector.vue'
import CountySelector from '~/components/common/CountySelector.vue'
import Upload from '~/components/kyc/Upload.vue'
import DemoDialog from '~/components/kyc/DemoDialog.vue'
import Banner from '~/components/kyc/Banner.vue'

export default defineComponent({
  components: {
    RightMenu,
    PhoneCode,
    CountySelector,
    Upload,
    DemoDialog,
    Banner
  },

  setup() {
    const context = useContext() as any;
    const store = useStore() as any
    const Router = useRouter();
    const { i18n, redirect, localePath } = context;
    // const showMsg = (context as any).$showMsg
    // 修改区号
    const changeAreaCode = (value) => {
      console.log('changeAreaCode...value ....', value);
      basicForm.phoneArea = value;
    }
    
    const kycInfo = computed(() => store.state.kyc.kycInfo); 
    watch(kycInfo, (val) => {
      if (kycInfo.value.kycUserInfo.verificationStatus === 100) {
        redirect(localePath('/assets/kyc'))
        return;
      }
      for (const key in val.kycUserBasic) {
        basicForm[key] = val.kycUserBasic[key];
      }
      basicForm.title = basicForm.title.toString();
      basicForm.certificateType = basicForm.certificateType.toString();
      // basicForm = val.kycUserBasic;
    })

    // 新增加税收来源
    const addTaxInputs = () => {
      console.log('addTaxInputs');
      if (basicForm.jurisdictions.length >= 20) {
        // context.showMsg('fix bug');
        return;
      }
      basicForm.jurisdictions.push({
        place: '',
        taxNo: '' 
      })
    }

    const deleteTaxInput = (_index) => {
      if (basicForm.jurisdictions.length === 1) {
        // context.showMsg('fix bug');
        return;
      }
      basicForm.jurisdictions.splice(_index, 1)
    }

    // 修改税收地址s
    const changeJurisdictionsNation = (_nation:string, formItem:any, index:number) => {
      console.log('changeJurisdictionsNation ...', _nation, index);
      formItem.place = _nation;
      formEl.value.validateField('jurisdictions.' + index + '.place');
    }

    const uploadCertificateMaterialFile = (_files) => {
      basicForm.certificateMaterialFile = _files.join(',');
    }

    const uploadCertificateMaterialSelfieFile = (_files) => {
      basicForm.certificateMaterialSelfieFile = _files.join(',');
    }

    const uploadResidentMaterialFile = (_files) => {
      basicForm.residentMaterialFile = _files.join(',');
    }

    const changeBornNation = (nation) => {
      console.log('changeBornNation...', nation);
      basicForm.bornRegion = nation;
      formEl.value.validateField('bornRegion');
    }

    const changeResidentNation = (nation) => {
      console.log('nation...', nation);
      basicForm.residentNation = nation;
      formEl.value.validateField('residentNation');
      // 判断是不是中国香港；如果是则设置邮政编码为
      if (basicForm.residentZip === '' && nation === 'HKG') {
        basicForm.residentZip = 'NA';
      }
      if (basicForm.residentProvince === '' && nation === 'HKG') {
        basicForm.residentProvince = '香港'
      }
      if (basicForm.residentCity === '' && nation === 'HKG') {
        basicForm.residentCity = '香港'
      }
    }

    const changeNationality = (nation) => {
      basicForm.nationality = nation;
      formEl.value.validateField('nationality');
    }

    const changePublishNation = (nation) => {
      basicForm.publishRegion = nation;
      formEl.value.validateField('publishRegion');
    }
    // 定义form 字段
    const basicForm = reactive({
      title: '',
      birthday: '',
      bornRegion: '',
      certificateNo: '',
      certificateMaterialFile: '',
      certificateMaterialSelfieFile: '',
      certificateType: '1',
      expireDate: '',
      firstName: '',
      lastName: '',
      englishLastName: '',
      englishFirstName: '',
      nationality: '',
      onceName: '',
      otherName: '',
      phone: '',
      publishDate: '',
      publishRegion: '',
      residentAddress: '',
      residentCity: '',
      residentMaterialFile: '',
      residentNation: '',
      residentProvince: '',
      residentZip: '',
      phoneArea: '852',
      jurisdictions: [{
        place: '',
        taxNo: ''
      }]
    })

    const validateCertificateNo = (rule: any, value: string, callback: (arg0: Error|undefined) => void): void => {
      console.log('value...', value);
      console.log('value ....', value);
      value = value.toString().replaceAll(/\W/g, '');
      basicForm.certificateNo = value;
      if (!value) {
        if (basicForm.certificateType === '1') {
          callback(new Error(i18n.t('请输入身份证号码')))
        } else {
          callback(new Error(i18n.t('请输入护照号')))
        }
      } else {
        callback(undefined)
      }
    }

    const validatePhone = (rule: any, value: string, callback: (arg0: Error|undefined) => void): void => {
      console.log('value ....', value);
      value = value.toString().replaceAll(/\D/g, '');
      basicForm.phone = value.toString();
      if (value.toString().length === 0) {
        callback(new Error(i18n.t('请输入您的电话号码')));
      } else if (value.toString().length < 5 || value.toString().length > 11) {
        callback(new Error(i18n.t('电话号码长度应在5到11之间')));
      } else {
        callback(undefined)
      }
    }

    const validateExpireDate = (rule: any, value: string, callback: (arg0: Error|undefined) => void): void => {
      // 如果选择的是身份证则不需要校验过期日期
      if (basicForm.certificateType === '1') {
        callback(undefined)
      } else if (!value) {
        callback(new Error('请选择证件到期日期'))
      } else {
        callback(undefined)
      }
    }

    const rules = {
      title: [
        { required: true, message: i18n.t('请选择称谓'), trigger: ['blur', 'change'] }
      ],
      birthday: [
        { required: true, message: i18n.t('请填写生日'), trigger: ['blur', 'change'] }
      ],
      bornRegion: [
        { required: true, message: i18n.t('请选择出生地'), trigger: ['blur', 'change'] }
      ],
      certificateNo: [
        { validator: validateCertificateNo, trigger: ['blur', 'change'] }
      ],
      certificateMaterialFile: [
        { required: true, message: i18n.t('请上传身份证照片'), trigger: ['blur', 'change'] }
      ],
      certificateMaterialSelfieFile: [
        { required: true, message: i18n.t('请上传手持身份证自拍照'), trigger: ['blur', 'change'] }
      ],
      certificateType: [
        { required: true, message: i18n.t('请选择证件类型'), trigger: ['blur', 'change'] }
      ],
      expireDate: [
        { validator: validateExpireDate, trigger: ['blur', 'change'] }
      ],
      publishDate: [
        { required: true, message: i18n.t('请选择证件发行日期'), trigger: ['blur', 'change'] }
      ],
      firstName: [
        { required: true, message: i18n.t('请填写姓'), trigger: ['blur', 'change'] }
      ],
      lastName: [
        { required: true, message: i18n.t('请填写名'), trigger: ['blur', 'change'] }
      ],
      englishFirstName: [
        { required: true, message: i18n.t('请输入您的英文姓'), trigger: ['blur', 'change'] }
      ],
      englishLastName: [
        { required: true, message: i18n.t('请输入您的英文名'), trigger: ['blur', 'change'] }
      ],
      nationality: [
        { required: true, message: i18n.t('请选择国籍'), trigger: ['blur', 'change'] }
      ],
      phone: 
        [
          { validator: validatePhone, trigger: ['change', 'blur'] }
        ],       
      phoneArea: [
        { required: true, message: i18n.t('请选择国家区号'), trigger: ['blur', 'change'] }
      ],
      publishRegion: [
        { required: true, message: i18n.t('请选择发行国家或地区'), trigger: ['blur', 'change'] }
      ],
      residentAddress: [
        { required: true, message: i18n.t('请填写居住地'), trigger: ['blur', 'change'] }
      ],
      residentCity: [
        { required: true, message: i18n.t('请填写居住城市'), trigger: ['blur', 'change'] }
      ],
      residentMaterialFile: [
        { required: true, message: i18n.t('请上传居住证明文件'), trigger: ['blur', 'change'] }
      ],
      residentNation: [
        { required: true, message: i18n.t('请选择居住地国家'), trigger: ['blur', 'change'] }
      ],
      residentProvince: [
        { required: true, message: i18n.t('请填写居住地所在省、州'), trigger: ['blur', 'change'] }
      ],
      residentZip: [
        { required: true, message: i18n.t('请填写邮政编码'), trigger: ['blur', 'change'] }
      ]
    }
    
    const formEl = ref();

    const certificateMaterialFileError = ref('');
    const certificateMaterialSelfieFileError = ref('');
    const residentMaterialFileError = ref('');
    const isLoading = ref(false)
    // 提交form
    const submitForm = () => {
      console.log('form//', basicForm);
      formEl.value.validate((valid) => {
        // 增加校验文件是否已上传
        if (basicForm.certificateMaterialFile.length === 0) {
          valid = false;
          certificateMaterialFileError.value = i18n.t('请上传身份证件照片')
        }
        if (basicForm.certificateMaterialSelfieFile.length === 0) {
          valid = false;
          certificateMaterialSelfieFileError.value = i18n.t('请上传自拍身份证件照片')
        }
        if (basicForm.residentMaterialFile.length === 0) {
          valid = false;
          residentMaterialFileError.value = i18n.t('请上传地址相关证明文件')
        }
        if (valid) {
          isLoading.value = true 
          $http.kyc.basicSubmit(basicForm).then(result => {
            console.log('result ...', result);
            if (result.code === 200) {
              Router.push(context.app.localePath('/assets/kyc/assess'));
            } else {
              // showMsg(result.msg, 'error')
              console.log('result', result)
              // console.error('result', result)
            }
            isLoading.value = false
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    } 

    // 处理弹框相关
    const showDialog = ref(false);
    const demoType = ref(1);

    const openDialog = (_type:number) => {
      showDialog.value = true;
      demoType.value = _type;
    }

    const dateOption1 = { // 禁用大于今天的时间
      disabledDate(time) {
        return time.getTime() > Date.now();
      }
    }

    const dateOption2 = {
      disabledDate(time) {
        return time.getTime() <= Date.now();
      }
    }

    const dateOptionBirthDay = { // 禁用大于今天的时间
      disabledDate(time) {
        const dateBirth = new Date();
        dateBirth.setFullYear(dateBirth.getFullYear() - 18);
        return time.getTime() > dateBirth;
      }
    }

    useMeta({ 
      title: i18n.t('身份认证'),
      titleTemplate: `${i18n.t('HKBGE')} | %s`,
      meta: [
        { hid: 'description', name: 'description', content: i18n.t('安全合规的数字资产交易平台') },
        { hid: 'keywords', name: 'keywords', content: i18n.t('HKBGE、区块链、数字货币、比特币、莱特币、以太坊，交易所，OSL') }
      ]
    })

    return {
      changeAreaCode,
      addTaxInputs,
      deleteTaxInput,
      changeJurisdictionsNation,
      submitForm,
      uploadCertificateMaterialFile,
      uploadCertificateMaterialSelfieFile,
      uploadResidentMaterialFile,
      changeBornNation,
      changeResidentNation,
      changeNationality,
      changePublishNation,
      certificateMaterialFileError,
      certificateMaterialSelfieFileError,
      residentMaterialFileError,
      rules,
      basicForm,
      formEl,
      openDialog,
      showDialog,
      demoType,
      isLoading,
      i18n,
      dateOption1,
      dateOptionBirthDay,
      dateOption2
    }
  },
  head: {}
})
</script>
