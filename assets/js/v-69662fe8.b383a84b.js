"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43283],{5795:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-69662fe8",path:"/devices/ERS-10TZBVK-AA.html",title:"TuYa ERS-10TZBVK-AA control via MQTT",lang:"en-US",frontmatter:{title:"TuYa ERS-10TZBVK-AA control via MQTT",description:"Integrate your TuYa ERS-10TZBVK-AA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-12-31T16:51:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"The toggle action switches on/off an unexpected zigbee device",slug:"the-toggle-action-switches-on-off-an-unexpected-zigbee-device",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Action_step_size (numeric)",slug:"action-step-size-numeric",children:[]},{level:3,title:"Action_transition_time (numeric)",slug:"action-transition-time-numeric",children:[]},{level:3,title:"Action_rate (numeric)",slug:"action-rate-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Operation_mode (enum)",slug:"operation-mode-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ERS-10TZBVK-AA.md",git:{updatedTime:1658436427e3}}},77441:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var a=o(66252);const i=(0,a.uE)('<h1 id="tuya-ers-10tzbvk-aa" tabindex="-1"><a class="header-anchor" href="#tuya-ers-10tzbvk-aa" aria-hidden="true">#</a> TuYa ERS-10TZBVK-AA</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ERS-10TZBVK-AA</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Smart knob</td></tr><tr><td>Exposes</td><td>action, action_step_size, action_transition_time, action_rate, battery, operation_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ERS-10TZBVK-AA.jpg" alt="TuYa ERS-10TZBVK-AA"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair, press the reset button on the back until the green LED flashes.</p><blockquote><p>Note: When you release the reset button, the green LED should keep flashing until the device is paired. If it only flashes a few times and then stops, your battery level is most likely too low (&lt;3v) and you need to replace the battery.</p></blockquote><h3 id="the-toggle-action-switches-on-off-an-unexpected-zigbee-device" tabindex="-1"><a class="header-anchor" href="#the-toggle-action-switches-on-off-an-unexpected-zigbee-device" aria-hidden="true">#</a> The <code>toggle</code> action switches on/off an unexpected zigbee device</h3>',7),n=(0,a.Uk)("The source of the problem is that manufactures of the knob and another device placed them into group 0 by default. To bypass it, you should manually create a group in Z2M with different ID (ID=1, for example) and add your knob inside. For more details take a look at "),d={href:"https://github.com/Koenkk/zigbee2mqtt/issues/12397",target:"_blank",rel:"noopener noreferrer"},s=(0,a.Uk)("the issue"),r=(0,a.Uk)("."),c=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),l=(0,a.Uk)("How to use device type specific configuration"),u=(0,a.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>, <code>saturation_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>single</code>, <code>double</code>, <code>hold</code>, <code>rotate_left</code>, <code>rotate_right</code>.</p><h3 id="action-step-size-numeric" tabindex="-1"><a class="header-anchor" href="#action-step-size-numeric" aria-hidden="true">#</a> Action_step_size (numeric)</h3><p>Value can be found in the published state on the <code>action_step_size</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="action-transition-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-transition-time-numeric" aria-hidden="true">#</a> Action_transition_time (numeric)</h3><p>Value can be found in the published state on the <code>action_transition_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="action-rate-numeric" tabindex="-1"><a class="header-anchor" href="#action-rate-numeric" aria-hidden="true">#</a> Action_rate (numeric)</h3><p>Value can be found in the published state on the <code>action_rate</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation_mode (enum)</h3><p>Operation mode: &quot;command&quot; - for group control, &quot;event&quot; - for clicks. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),h={},p=(0,o(83744).Z)(h,[["render",function(e,t){const o=(0,a.up)("OutboundLink"),h=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[n,(0,a._)("a",d,[s,(0,a.Wm)(o)]),r]),c,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(h,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[l])),_:1})])]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);