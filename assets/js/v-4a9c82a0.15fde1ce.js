"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[90105],{13300:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-4a9c82a0",path:"/devices/PERCALE2.html",title:"Acova PERCALE2 control via MQTT",lang:"en-US",frontmatter:{title:"Acova PERCALE2 control via MQTT",description:"Integrate your Acova PERCALE2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-12-31T16:51:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PERCALE2.md",git:{updatedTime:1658436427e3}}},32371:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var d=o(66252);const i=(0,d.uE)('<h1 id="acova-percale2" tabindex="-1"><a class="header-anchor" href="#acova-percale2" aria-hidden="true">#</a> Acova PERCALE2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PERCALE2</td></tr><tr><td>Vendor</td><td>Acova</td></tr><tr><td>Description</td><td>Percale 2 heater</td></tr><tr><td>Exposes</td><td>climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PERCALE2.jpg" alt="Acova PERCALE2"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),a=(0,d.Uk)("How to use device type specific configuration"),c=(0,d.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>28</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),s={},r=(0,o(83744).Z)(s,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[a])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);