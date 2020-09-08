import Vue from 'vue'

/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * autoHideHeader - 向下滚动时，隐藏 Header : boolean
 * contentWidth - 内容区布局： 流式 |  固定
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

const app = {
  state: {
    sidebar: true,
    device: 'desktop',
    theme: 'dark',// ['dark', 'light'] 两种主题
    layout:'sidemenu',
    contentWidth: '',
    fixedHeader: true,
    fixSiderbar: true,
    autoHideHeader: false,
    color:'',
    weak: false,
    multiTab: false
  },
  mutations: {
    SET_SIDEBAR_TYPE: (state, type) => {
      state.sidebar = type
    },
    CLOSE_SIDEBAR: (state) => {
      state.sidebar = false
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    TOGGLE_THEME: (state, theme) => {
      state.theme = theme
    },
    TOGGLE_LAYOUT_MODE: (state, layout) => {
      state.layout = layout
    },
    TOGGLE_FIXED_HEADER: (state, fixed) => {
      state.fixedHeader = fixed
    },
    TOGGLE_FIXED_SIDERBAR: (state, fixed) => {
      state.fixSiderbar = fixed
    },
    TOGGLE_FIXED_HEADER_HIDDEN: (state, show) => {
      state.autoHideHeader = show
    },
    TOGGLE_CONTENT_WIDTH: (state, type) => {
      state.contentWidth = type
    },
    TOGGLE_COLOR: (state, color) => {
      state.color = color
    },
    TOGGLE_WEAK: (state, flag) => {
      state.weak = flag
    },
    TOGGLE_MULTI_TAB: (state, bool) => {
      state.multiTab = bool
    }
  },
  actions: {
    setSidebar ({ commit }, type) {
      commit('SET_SIDEBAR_TYPE', type)
    },
    CloseSidebar ({ commit }) {
      commit('CLOSE_SIDEBAR')
    },
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    ToggleTheme ({ commit }, theme) {
      commit('TOGGLE_THEME', theme)
    },
    ToggleLayoutMode ({ commit }, mode) {
      commit('TOGGLE_LAYOUT_MODE', mode)
    },
    ToggleFixedHeader ({ commit }, fixedHeader) {
      if (!fixedHeader) {
        commit('TOGGLE_FIXED_HEADER_HIDDEN', false)
      }
      commit('TOGGLE_FIXED_HEADER', fixedHeader)
    },
    ToggleFixSiderbar ({ commit }, fixSiderbar) {
      commit('TOGGLE_FIXED_SIDERBAR', fixSiderbar)
    },
    ToggleFixedHeaderHidden ({ commit }, show) {
      commit('TOGGLE_FIXED_HEADER_HIDDEN', show)
    },
    ToggleContentWidth ({ commit }, type) {
      commit('TOGGLE_CONTENT_WIDTH', type)
    },
    ToggleColor ({ commit }, color) {
      commit('TOGGLE_COLOR', color)
    },
    ToggleWeak ({ commit }, weakFlag) {
      commit('TOGGLE_WEAK', weakFlag)
    },
    ToggleMultiTab ({ commit }, bool) {
      commit('TOGGLE_MULTI_TAB', bool)
    }
  }
}

export default app
