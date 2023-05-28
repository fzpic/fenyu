const t=JSON.parse('{"key":"v-5da24c3c","path":"/posts/2017-10-18-light_cat_port_forwarding.html","title":"光猫改造 篇二：光猫 + 路由器，实现端口映射","lang":"zh-CN","frontmatter":{"title":"光猫改造 篇二：光猫 + 路由器，实现端口映射","date":"2017-10-18T22:00:00.000Z","category":["网络"],"tag":["光猫"],"order":-8,"description":"光猫默认没有管理权限，需要先获得光猫的超管密码，参考光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2）。 光猫端口映射步骤： 登陆光猫管理地址 192.168.1.1，应用 → 高级 NAT 设置 →DMZ 设置，启用 DMZ 主机绑定路由器地址（路由器 WAN 口 IP 地址 -192.168.1.X) 登陆路由器管理地址 192.168.X.X。这里已梅林 AC5300 为图例。 在路由器设置选项中找到“端口转发”，按要求设置端口。我这是 eMule TCP 和 UDP 转发，设置完成后，变成 High ID。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2017-10-18-light_cat_port_forwarding.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"光猫改造 篇二：光猫 + 路由器，实现端口映射"}],["meta",{"property":"og:description","content":"光猫默认没有管理权限，需要先获得光猫的超管密码，参考光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2）。 光猫端口映射步骤： 登陆光猫管理地址 192.168.1.1，应用 → 高级 NAT 设置 →DMZ 设置，启用 DMZ 主机绑定路由器地址（路由器 WAN 口 IP 地址 -192.168.1.X) 登陆路由器管理地址 192.168.X.X。这里已梅林 AC5300 为图例。 在路由器设置选项中找到“端口转发”，按要求设置端口。我这是 eMule TCP 和 UDP 转发，设置完成后，变成 High ID。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T09:28:33.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"光猫"}],["meta",{"property":"article:published_time","content":"2017-10-18T22:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T09:28:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"光猫改造 篇二：光猫 + 路由器，实现端口映射\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-10-18T22:00:00.000Z\\",\\"dateModified\\":\\"2023-05-28T09:28:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[],"git":{"createdTime":1685266113000,"updatedTime":1685266113000,"contributors":[{"name":"fzpic","email":"fzpic@126.com","commits":1}]},"readingTime":{"minutes":0.69,"words":206},"filePathRelative":"_posts/2017-10-18-light_cat_port_forwarding.md","localizedDate":"2017年10月18日","excerpt":"<p>光猫默认没有管理权限，需要先获得光猫的超管密码，参考<a href=\\"https://newzone.top/posts/2017-10-18-Light_cat_E8-C-EPON_admin.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2）</a>。</p>\\n<p><strong>光猫端口映射步骤：</strong></p>\\n<ol>\\n<li>\\n<p>登陆光猫管理地址 192.168.1.1，应用 → 高级 NAT 设置 →DMZ 设置，启用 DMZ 主机绑定路由器地址（路由器 WAN 口 IP 地址 -192.168.1.X)</p>\\n<figure><img src=\\"https://pic2.zhimg.com/v2-658d5433201b79da169a520f4b19d495_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>登陆路由器管理地址 192.168.X.X。这里已梅林 AC5300 为图例。</p>\\n<figure><img src=\\"https://pic4.zhimg.com/v2-32825a6d3d75f4bfe5668f1b0d6c6683_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>在路由器设置选项中找到“端口转发”，按要求设置端口。我这是 eMule TCP 和 UDP 转发，设置完成后，变成 High ID。</p>\\n<figure><img src=\\"https://pic2.zhimg.com/v2-8f3eb2c42fd5d1a98f1345c6a5855e99_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<figure><img src=\\"https://pic2.zhimg.com/v2-b4f5179278da52409f4a04ce7d139f99_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};
