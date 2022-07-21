"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67844],{19902:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-a4d66a36",path:"/devices/MEG5113-0300_MEG5165-0000.html",title:"Schneider Electric MEG5113-0300/MEG5165-0000 control via MQTT",lang:"en-US",frontmatter:{title:"Schneider Electric MEG5113-0300/MEG5165-0000 control via MQTT",description:"Integrate your Schneider Electric MEG5113-0300/MEG5165-0000 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-13T15:34:31.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Control",slug:"control",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Lift_duration (numeric)",slug:"lift-duration-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MEG5113-0300_MEG5165-0000.md",git:{updatedTime:1658436427e3}}},52053:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var i=o(66252);const a=(0,i.uE)('<h1 id="schneider-electric-meg5113-0300-meg5165-0000" tabindex="-1"><a class="header-anchor" href="#schneider-electric-meg5113-0300-meg5165-0000" aria-hidden="true">#</a> Schneider Electric MEG5113-0300/MEG5165-0000</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MEG5113-0300/MEG5165-0000</td></tr><tr><td>Vendor</td><td>Schneider Electric</td></tr><tr><td>Description</td><td>Merten MEG5165 PlusLink Shutter insert with Merten Wiser System M Push Button (1fold)</td></tr><tr><td>Exposes</td><td>cover (state, position), lift_duration, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MEG5113-0300-MEG5165-0000.jpg" alt="Schneider Electric MEG5113-0300/MEG5165-0000"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To get the device into pairing mode, press the up button 3 times briefly and then hold it for a long time (almost 20s). After about 10s the LED starts blinking slowly, continue to hold until it starts blinking rapidly. Now you can release it. Pairing will take a while to complete. The LED will blink and change color during this process.</p><h3 id="control" tabindex="-1"><a class="header-anchor" href="#control" aria-hidden="true">#</a> Control</h3><p>The shutter control uses a simple timer to control the duration to open/close the shutter. The timer duration can be set via &#39;duration&#39;.<br> Be aware, that the controller has no physical position information. Therefore, whenever the shutter is somewhere between fully open and fully closed and you send a command to move to any position other than fully open, the shutter will first move to the fully open position, wait for the timer to elapse and then move to the position you selected.</p><p>Example: You have set a duration of 20s. The shutter is half closed and you send a command to fully close it. It will first fully open (within e.g. 10s) then wait another 10s until the timer has elapsed and then close the shutter completely (taking another 20s).<br> This behavior is designed like this and probably chosen to prevent positioning problems due to motion backlash. It cannot be changed.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',9),r=(0,i.Uk)("How to use device type specific configuration"),n=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="lift-duration-numeric" tabindex="-1"><a class="header-anchor" href="#lift-duration-numeric" aria-hidden="true">#</a> Lift_duration (numeric)</h3><p>Duration of lift. Value can be found in the published state on the <code>lift_duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lift_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>seconds</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),d={},s=(0,o(83744).Z)(d,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[r])),_:1})])]),n],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);