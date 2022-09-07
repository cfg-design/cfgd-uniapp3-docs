---
title: Form 表单
---

# Form 表单

<iframe src="https://cfg-design.github.io/cfgd-uniapp3/#/pages/form/index" style="width: 375px; height: 667px" />

### 基本使用

```vue-html
<c-form>
  <c-form-item label="账号">
    <c-input placeholder="用户名" />
  </c-form-item>
</c-form>
```

### 验证规则 {#rules}

添加对 trigger 支持； 值有： 'input' 、 'change' 、 'blur' 和 'focus' 。

其它参数详情请查看 [async-validator](https://github.com/yiminghe/async-validator) 。

```ts
import type { FormRules, RadioProps } from '@/uni_modules/cfg-design'
import { ref } from 'vue'
import CForm from '@/uni_modules/cfg-design/components/c-form/c-form.vue'
import Form1 from './form1.vue'

const defaultFormData = {
  nickName: '',
  name: 'user0',
  pass: '',
  pass2: '',
  brief: '',
  hobby: [],
  agreement: false,
  sex: '',
  sync: false,
  age: 17
}

const sexs: RadioProps[] = [
  { text: '男', value: '1' },
  { text: '女', value: '2' },
  { text: '保密[no-feedback]', value: '3', noFeedback: true }
]

const formRef = ref<InstanceType<typeof CForm>>()
const formData = ref({ ...defaultFormData })
const rules: FormRules = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'input'
    }
  ],
  pass: [
    {
      required: true,
      message: '密码不能为空',
      trigger: ['input']
    }
  ],
  pass2: [
    {
      required: true,
      message: '密码2不能为空',
      trigger: ['input', 'blur']
    },
    {
      // 小程序不支持方法传参。需要使用 formRef.value!.setRules(rules) 来设置
      validator: () => formData.value.pass === formData.value.pass2,
      message: '两次密码输入不同',
      trigger: 'blur'
    },
  ],
  hobby: [
    {
      required: true,
      type: 'array',
      message: '请选择你的爱好',
      trigger: 'change'
    }
  ],
  sex: [
    {
      required: true,
      message: '请选择性别',
      trigger: ['change']
    }
  ],
  brief: [
    {
      required: true,
      message: '简介不能为空',
      trigger: 'input'
    }
  ],
  agreement: [
    {
      required: true,
      type: 'enum',
      enum: [true],
      message: '请选择阅读并同意协议',
      trigger: 'change'
    }
  ],
  sync: [
    {
      required: true,
      type: 'enum',
      enum: [true],
      message: '请开启同步',
      trigger: 'change'
    }
  ],
  age: [
    {
      required: true,
      type: 'number',
      min: 18,
      message: '年龄太小',
      trigger: 'change'
    }
  ],
}

const onSubmit = () => {
  formRef.value?.validate((errors) => {
    console.log(errors)
    if (errors) {
      uni.showToast({
        title: errors[0].message,
        icon: 'error'
      })
      return
    }

    uni.showToast({ title: 'submitting' })
  })
}
const onReset = () => formRef.value!.reset()
const clear = () => formRef.value!.clear()
const restoreValidation = () => formRef.value!.restoreValidation()
```

```vue-html
<c-form
  ref="formRef"
  v-model:value="formData"
  :rules="rules"
  :item="{ labelWidth: 120 }"
>
  <c-form-item no-label no-border-bottom>
    <c-row gutter="10rpx">
      <c-col>
        <c-button color="warning" text="清空校验结果" width="100%" @click="restoreValidation" />
      </c-col>
      <c-col>
        <c-button color="success" text="清空数据" width="100%" @click="clear" />
      </c-col>
      <c-col>
        <c-button color="error" text="重置" width="100%" form-type="reset" @click="onReset" />
      </c-col>
      <c-col>
        <c-button color="primary" text="提交" width="100%" form-type="submit" @click="onSubmit" />
      </c-col>
    </c-row>
  </c-form-item>
  <c-form-item label="昵称">
    <c-input v-model:value="formData.nickName" placeholder="昵称" />
  </c-form-item>
  <c-form-item label="账号" path="name">
    <c-input v-model:value="formData.name" placeholder="用户名" clearable />
  </c-form-item>
  <c-form-item label="密码" path="pass">
    <c-input v-model:value="formData.pass" password placeholder="密码" auto-focus clearable />
  </c-form-item>
  <c-form-item label="密码2" path="pass2">
    <c-input v-model:value="formData.pass2" password placeholder="再次输入密码" border />
  </c-form-item>
  <c-form-item label="密码2" path="pass2">
    <c-input v-model:value="formData.pass2" password placeholder="input: no-feedback" border no-feedback />
  </c-form-item>
  <c-form-item label="密码2" path="pass2" no-feedback>
    <c-input v-model:value="formData.pass2" password placeholder="form-item: no-feedback" border />
  </c-form-item>
  <c-form-item label="爱好" path="hobby">
    <c-checkbox-group v-model:value="formData.hobby" c="row">
      <c-checkbox text="看电影" />
      <c-checkbox text="听音乐[no-feedback]" no-feedback />
    </c-checkbox-group>
  </c-form-item>
  <c-form-item label="性别" path="sex">
    <c-radio-group v-model:value="formData.sex" c="row" :items="sexs" />
  </c-form-item>
  <c-form-item label="同步" path="sync">
    <c-switch v-model:value="formData.sync" round />
    <c-switch v-model:value="formData.sync" no-feedback un-checked-text="no-feedback" checked-text="no-feedback" />
  </c-form-item>
  <c-form-item label="年龄" path="age">
    <c-input-number v-model:value="formData.age" />
  </c-form-item>
  <c-form-item label="简介" path="brief">
    <c-textarea v-model:value="formData.brief" placeholder="简介" height="100rpx" />
  </c-form-item>
  <c-form-item label="协议" path="agreement">
    <c-checkbox v-model:checked="formData.agreement">
      <c-text>已阅读并同意</c-text><c-text color="primary" @click.stop="">《xxxxxxxxxx》</c-text><c-text>协议</c-text>
    </c-checkbox>
  </c-form-item>
</c-form>
```

### API

### Form Props {#props}

| 名称             | 类型                         | 默认值             | 版本           | 说明           |
|:----------------|:-----------------------------|:------------------|:--------------|:--------------|
| c               | string                       | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props           | FormProps                    | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class         | HTMLAttributes['class']      | undefined         |               | 自定义类名 |
| c-style         | HTMLAttributes['style']      | undefined         |               | 自定义样式 |
| value           | Record<string, any>          | undefined         |               | 表单数据对象 |
| rules           | FormRules                    | undefined         |               | [验证规则](#rules)。[async-validator](https://github.com/yiminghe/async-validator)  |
| disabled        | boolean                      | undefined         |               | 是否禁用 |
| item            | FormItemProps                | undefined         |               | [FormItemProps](#form-item-props)  |

### FormItem Props {#form-item-props}

| 名称             | 类型                         | 默认值             | 版本           | 说明           |
|:----------------|:----------------------------|:------------------|:--------------|:--------------|
| c                | string                     | default           |               | 配置名。[使用说明](/guide/props.html#config)    |
| props            | FormProps                  | undefined         |               | 全部 props 。 [使用说明](/guide/props.html) |
| c-class          | HTMLAttributes['class']    | undefined         |               | 自定义类名 |
| c-style          | HTMLAttributes['style']    | undefined         |               | 自定义样式 |
| main-class       | HTMLAttributes['class']    | undefined         |               | main 的自定义类名 |
| main-style       | HTMLAttributes['style']    | undefined         |               | main 的自定义样式 |
| label-class      | HTMLAttributes['class']    | undefined         |               | label 的自定义类名 |
| label-style      | HTMLAttributes['style']    | undefined         |               | label 的自定义样式 |
| content-class    | HTMLAttributes['class']    | undefined         |               | content 的自定义类名 |
| content-style    | HTMLAttributes['style']    | undefined         |               | content 的自定义样式 |
| size             | string \| number           | undefined         |               | 字体大小。 [使用说明](/guide/font-sizes.html) |
| path             | string                     | undefined         |               | Form value 对象的属性名 |
| label            | string                     | undefined         |               | 标签文字 |
| label-placement  | 'left' \| 'top'            | undefined         |               | 标签显示的位置 |
| label-width      | string \| number           | undefined         |               | 标签的宽度 |
| label-for        | string                     | undefined         |               | 绑定控件的 id  |
| label-text-props | TextProps                  | undefined         |               | 标签文字。[TextProps](/components/text.html#props)  |
| right-icon       | string                     | undefined         |               | 右边图标名称或代码 |
| right-icon-props | IconProps                  | undefined         |               | [IconProps](/components/icon.html#props)  |
| error-props      | TextProps                  | undefined         |               | [TextProps](/components/text.html#props)  |
| disabled         | boolean                    | undefined         |               | 是否禁用 |
| no-feedback      | boolean                    | undefined         |               | 是否展示校验反馈 |
| no-label         | boolean                    | undefined         |               | 是否展示标签 |
| no-require-mark  | boolean                    | undefined         |               | 是否展示必填的星号 |
| no-border-bottom | boolean                    | undefined         |               | 是否不显示表单项的下划线边框 |
| line-props       | LineProps                  | undefined         |               | 下划线边框。[LineProps](/components/line.html#props) |

### FormItem Slots {#form-item-slots}

| 名称             | 参数                             | 说明           |
|:----------------|:------------------------------- |:--------------|
| default         | ()                              | 自定义 content 左边的内容 |
| label           | ()                              | 自定义 label  |
| error           | { errMsg: string | undefined }  | 自定义错误提示 |


### Form Methods validateField 相同}

| 名称                  | 类型                                                                                                                 | 说明               |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------|:------------------|
| setRules             | (rules: FormRules) => void                                                                                           | 设置验证规则。用来解决小程序 props 不能传方法问题。 |
| validate             | (callback?: (errors: ValidateError[] \| null, fields: ValidateFieldsError \| Values) => void) => Promise\<Values\>   | 验证表单 |
| validateField        | (field: string, callback?: ValidateCallback, trigger?: ValidationTrigger) => Promise\<Values\>                       | 对表单某个字段进行验证。 callback 同跟 validate 一样           |
| restoreValidation    | () => void                                                                                                           | 清空校验结果           |
| clear                | () => void                                                                                                           | 删除表单数据，并清空校验结果           |
| reset                | () => void                                                                                                           | 还原表单数据，并清空校验结果           |

### Form Provides {#provide}

```ts
import {
  formInjectionKeyDisabled,
  formInjectionKeyFieldsErrors,
  formInjectionKeyItemProps,
  formInjectionKeyRules,
  formInjectionKeyValidateField
} from '@/uni_modules/cfg-design'
```

| 名称                                | 类型                                                    | 说明               |
|:-----------------------------------|:--------------------------------------------------------|:------------------|
| formInjectionKeyRules              | InjectionKey\<Ref\<FormRules\>\> = Symbol()             | 验证规则               |
| formInjectionKeyDisabled           | InjectionKey\<Ref\<boolean\>\> = Symbol()               | 是否禁用               |
| formInjectionKeyItemProps          | InjectionKey\<Ref\<FormItemProps\>\> = Symbol()         | [FormItemProps](#form-item-props)               |
| formInjectionKeyFieldsErrors       | InjectionKey\<Ref\<ValidateFieldsError\>\> = Symbol()   | 验证错误结果数据               |
| formInjectionKeyValidateField      | InjectionKey\<FormValidateField\> = Symbol()            | 对表单某个字段进行验证， 跟 Methods validateField 相同|


### FormItem Provides {#form-item-provide}

```ts
import {
  formItemInjectionKeyDisabled,
  formItemInjectionKeyNoFeedback,
  formItemInjectionKeyPath,
  formItemInjectionKeySize
} from '@/uni_modules/cfg-design'
```

| 名称                                | 类型                                                      | 说明               |
|:-----------------------------------|:----------------------------------------------------------|:------------------|
| formItemInjectionKeySize           | InjectionKey\<Ref\<string\>\> = Symbol()                  | 字体大小               |
| formItemInjectionKeyDisabled       | InjectionKey\<Ref\<boolean\>\> = Symbol()                 | 是否禁用               |
| formItemInjectionKeyPath           | InjectionKey\<Ref\<string\>\> = Symbol()                  | Form value 对象的属性名               |
| formItemInjectionKeyNoFeedback     | InjectionKey\<Ref\<boolean\>\> = Symbol()                 | 是否展示校验反馈               |
