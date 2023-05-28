import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as d,a as n,b as e,d as a,w as i,e as s}from"./app-0a042521.js";const p={},u=n("p",null,"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。",-1),k=n("h2",{id:"docker-命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-命令","aria-hidden":"true"},"#"),e(" Docker 命令")],-1),h={href:"https://yeasy.gitbook.io/docker_practice/introduction/what",target:"_blank",rel:"noopener noreferrer"},m=s('<ul><li>列出所有容器：<code>sudo docker ps -a</code>。</li><li>停止容器运行：<code>sudo docker stop &lt;CONTAINER ID/NAME&gt;</code>。部分容器名有可能无法识别，最好在容器名称中添加数字。</li><li>删除指定容器：<code>sudo docker rm &lt;CONTAINER ID/NAME&gt;</code>，删除前需先停止容器。</li><li>清理容器（慎重）：<code>sudo docker system prune -a</code>，用于清理磁盘，删除关闭的容器、无用的数据卷和网络，以及无 tag 和没使用的镜像。</li><li>清理数据卷（慎重）：<code>sudo docker volume prune</code>，关闭的容器数据卷会被删除，有可能破坏有用数据，需极度谨慎。</li><li>导出容器中的 mysql 数据库 <code>sudo docker exec &lt;container_id&gt; mysqldump -u root -p&lt;your_mysql_root_password&gt; your_database_name &gt; &lt;output_file&gt;</code>。将 &lt;container_id&gt; 替换为实际的容器 ID，将 &lt;output_file&gt; 替换为你想要保存导出文件的路径和文件名。请将 &lt;your_mysql_root_password&gt; 替换为你的 MySQL root 用户密码。完成后，你将得到一个 MySQL 数据库备份文件。比如导出 Huginn 数据库，<code>sudo docker exec 3de3058e4468 mysqldump -u root -p&lt;your_mysql_root_password&gt; huginn_production &gt; /volume1/docker/huginn/backup.sql</code>。</li></ul><h2 id="定制-docker-镜像" tabindex="-1"><a class="header-anchor" href="#定制-docker-镜像" aria-hidden="true">#</a> 定制 Docker 镜像</h2>',2),b={href:"https://blog.csdn.net/a772304419/article/details/123199579",target:"_blank",rel:"noopener noreferrer"},_=s(`<p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> commit <span class="token punctuation">\\</span>
    <span class="token parameter variable">--message</span> <span class="token string">&quot;基于 Ubuntu 18.04 构建的 Huginn&quot;</span> <span class="token punctuation">\\</span>
    ubuntu <span class="token punctuation">\\</span>
    huginnxubuntu:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以使用 Dockerfile 来构建镜像，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    build:
      context: /volume1/docker/danmuji
      dockerfile: Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理-docker-数据库" tabindex="-1"><a class="header-anchor" href="#管理-docker-数据库" aria-hidden="true">#</a> 管理 Docker 数据库</h2><p>Docker 中的数据库可以指向外部，并且可以永久保存。但是外部保存的数据是各种小文件，而不是完整的 MySQL 文件，因此不能直接作为数据库进行读取。在实际管理中，我们不需要关心外部存储文件，而应该直接使用正在运行的数据库。</p><p>首先，我们需要将 Docker 的数据库端口对外开放。例如，MySQL 的默认端口是 3306，我们可以将其指向 Docker 外的 3307 端口。然后，我们可以使用数据库应用程序连接数据库地址 192.168.3.3:3307。操作流程类似于 phpMyAdmin，非常简单，可以轻松地查看、修改和导出 Docker 中的数据库。如果你的数据库连接仍然被拒绝，可以参考 Huginn 中的内部数据库连接，将当前外部连接 IP 设置为允许。</p><h2 id="其他使用" tabindex="-1"><a class="header-anchor" href="#其他使用" aria-hidden="true">#</a> 其他使用</h2><h3 id="windows-docker" tabindex="-1"><a class="header-anchor" href="#windows-docker" aria-hidden="true">#</a> Windows Docker</h3>`,9),v={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://newzone.top/posts/2022-09-05-stable_diffusion_ai_painting.html#docker-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[e("Windows 本地磁盘被挂载到 Linux 的 mnt 目录下，因此，如果需要在 WSL 中访问 Windows 文件，需要在路径前添加 "),n("code",null,"/mnt/"),e(" 前缀，并将磁盘符号改为小写字母，将反斜杠 "),n("code",null,"\\"),e(" 替换为正斜杠 "),n("code",null,"/"),e("。例如，如果 Windows 文件位于「D:\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker」目录下，则其在 Linux 中的路径为「/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker」。Windows 上的 WSL 本地路径为 "),n("code",null,"\\\\wsl.localhost\\"),e("。")],-1),w={href:"https://learn.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl",target:"_blank",rel:"noopener noreferrer"},x=n("h3",{id:"宝塔镜像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#宝塔镜像","aria-hidden":"true"},"#"),e(" 宝塔镜像")],-1),D={href:"https://www.bt.cn/bbs/thread-79499-1-1.html",target:"_blank",rel:"noopener noreferrer"},E={href:"http://blog.huangyuqiang.cn/index.php/2022/11/02/docker%E5%AE%89%E8%A3%85%E5%AE%9D%E5%A1%94%E7%8E%AF%E5%A2%83/",target:"_blank",rel:"noopener noreferrer"},y=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 按需求修改映射端口和目录，1024 以下的端口不能给普通用户用</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span> unless-stopped <span class="token parameter variable">--name</span> baota <span class="token parameter variable">-p</span> <span class="token number">8889</span>:8888 <span class="token parameter variable">-p</span> <span class="token number">1033</span>:22 <span class="token parameter variable">-p</span> <span class="token number">1044</span>:443 <span class="token parameter variable">-p</span> <span class="token number">1081</span>:80 <span class="token parameter variable">-p</span> <span class="token number">1889</span>:888 <span class="token parameter variable">-v</span> /volume1/docker/btpanel/website_data:/www/wwwroot <span class="token parameter variable">-v</span> /volume1/docker/btpanel/mysql_data:/www/server/data <span class="token parameter variable">-v</span> /volume1/docker/btpanel/vhost:/www/server/panel/vhost btpanel/baota:lnmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),L={href:"http://home.xx.com",target:"_blank",rel:"noopener noreferrer"},A={href:"http://home.xx.com:1081",target:"_blank",rel:"noopener noreferrer"},S=n("ul",null,[n("li",null,[e("默认地址 "),n("code",null,"http://192.168.x.x:8889/btpanel"),e(" 上的宝塔面板。")]),n("li",null,"默认用户：btpanel"),n("li",null,"默认密码：btpaneldocker"),n("li",null,"镜像默认 SSH 密码：btpaneldocker")],-1),N=n("p",null,[e("如果宝塔镜像仅用于测试环境，可以使用 "),n("code",null,"rm -f /www/server/panel/data/admin_path.pl"),e(" 命令来关闭面板入口。如果你关闭了 NAS 的 SSH 功能，宝塔面板也将停止，但不会影响已运行的网站。")],-1);function W(q,C){const t=r("RouterLink"),o=r("ExternalLinkIcon");return c(),d("div",null,[u,n("p",null,[e("Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 "),a(t,{to:"/services/NAS.html#nas-docker"},{default:i(()=>[e("NAS 上搭建 Docker")]),_:1}),e("。")]),k,n("p",null,[e("Docker 使用查看 "),n("a",h,[e("Docker — 从入门到实践"),a(o)]),e("。")]),m,n("p",null,[e("官方镜像并不总是符合我们的需求。因此，我们可以使用 docker commit 命令按需定制自己的镜像，具体操作见"),n("a",b,[e("使用 docker commit 将修改后的容器保存为镜像及其使用注意事项"),a(o)]),e("。")]),_,n("p",null,[e("在 Windows 系统上，可以使用 "),n("a",v,[e("Docker Desktop"),a(o)]),e(" 来管理容器，配置方法可参考 "),n("a",f,[e("Windows Docker 环境配置"),a(o)]),e("。")]),g,n("p",null,[e("请注意：WSL 上的 Linux 环境与其他环境有所不同，须查看"),n("a",w,[e("在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js"),a(o)]),e("。")]),x,n("p",null,[e("如果要在 Docker 上部署网站，推荐使用宝塔官方的集成镜像。它基于 CentOS 7.9，解决了 Docker 内部链接问题，还支持将数据库定时备份到本地。有关配置信息，请参考"),n("a",D,[e("宝塔面板定制 docker 镜像发布 - 集成 LN/AMP 支持"),a(o)]),e("和 "),n("a",E,[e("Docker 安装宝塔环境"),a(o)]),e("。但是，该镜像不适用于 Huginn 的部署，因为 Huginn 不支持 CentOS。我曾尝试将安装命令从 apt-get 替换为 yum，但仍然无法部署。当我尝试在 Docker 中直接安装宝塔而不使用官方集成镜像时，遇到了无法启动数据库的问题。")]),y,n("p",null,[e("在站点设置中，绑定你的本地域名 "),n("a",L,[e("home.xx.com"),a(o)]),e(" 和内部地址 192.168.x.x，这样你就可以通过访问 "),n("a",A,[e("home.xx.com:1081"),a(o)]),e(" 来访问该站点。")]),S,N])}const H=l(p,[["render",W],["__file","Docker.html.vue"]]);export{H as default};
