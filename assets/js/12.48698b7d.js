(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{355:function(t,a,e){"use strict";e.r(a);var v=e(42),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h4",{attrs:{id:"本地仓库初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库初始化"}},[t._v("#")]),t._v(" 本地仓库初始化")]),t._v(" "),e("p",[e("code",[t._v("git init")])]),t._v(" "),e("h4",{attrs:{id:"项目级别签名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目级别签名"}},[t._v("#")]),t._v(" 项目级别签名")]),t._v(" "),e("p",[e("code",[t._v("git config user.name [name]")])]),t._v(" "),e("h4",{attrs:{id:"系统级别签名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统级别签名"}},[t._v("#")]),t._v(" 系统级别签名")]),t._v(" "),e("p",[e("code",[t._v("git config --global user.name [name]")])]),t._v(" "),e("h4",{attrs:{id:"查看状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看状态"}},[t._v("#")]),t._v(" 查看状态")]),t._v(" "),e("p",[e("code",[t._v("git status")]),t._v(" 查看工作区，缓存区状态")]),t._v(" "),e("h4",{attrs:{id:"添加操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加操作"}},[t._v("#")]),t._v(" 添加操作")]),t._v(" "),e("p",[e("code",[t._v("git add [文件名]")]),t._v(" 将工作区新建/修改的内容添加到缓存区")]),t._v(" "),e("h4",{attrs:{id:"提交操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交操作"}},[t._v("#")]),t._v(" 提交操作")]),t._v(" "),e("p",[e("code",[t._v('git commit -m "commit-msg"')]),t._v(" 将暂存区内容提交到本地库")]),t._v(" "),e("h4",{attrs:{id:"查看历史记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看历史记录"}},[t._v("#")]),t._v(" 查看历史记录")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git log")])]),t._v(" "),e("li",[e("code",[t._v("git log --pretty=online")])]),t._v(" "),e("li",[e("code",[t._v("git reflog")])])]),t._v(" "),e("h4",{attrs:{id:"前进与后退"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前进与后退"}},[t._v("#")]),t._v(" 前进与后退")]),t._v(" "),e("ul",[e("li",[t._v("基于索引值操作 "),e("code",[t._v("git reset --hard [哈希索引值]")])]),t._v(" "),e("li",[t._v("使用 ^ 符号（一个^只能后退一步）"),e("code",[t._v("git reset --hard HEAD^")])]),t._v(" "),e("li",[t._v("使用～符号（后面跟的数字n为后退的步数） "),e("code",[t._v("git reset --hard HEAD~2")])])]),t._v(" "),e("h4",{attrs:{id:"比较文件差异"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#比较文件差异"}},[t._v("#")]),t._v(" 比较文件差异")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git diff [文件名]")]),t._v(" 比较工作区和缓存区的文件")]),t._v(" "),e("li",[e("code",[t._v("git diff [本地库历史版本] [文件名]")])])]),t._v(" "),e("blockquote",[e("p",[t._v("将工作区文件和本地库历史记录比较，不带文件名是比较多个文件")])]),t._v(" "),e("h4",{attrs:{id:"分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),e("p",[e("strong",[t._v("优势")])]),t._v(" "),e("ul",[e("li",[t._v("可以同时并行多个功能开发，提高效率")]),t._v(" "),e("li",[t._v("各个分支在开发中若某个分支开发失败，不会对其他分支造成影响，失败的分支可以删除后重新开始")])]),t._v(" "),e("h4",{attrs:{id:"多人协作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多人协作"}},[t._v("#")]),t._v(" 多人协作")]),t._v(" "),e("p",[t._v("1."),e("code",[t._v("git push origin master")]),e("br"),t._v("\n2.若有冲突，先git pull 试图合并  ("),e("code",[t._v("git pull origin master")]),t._v(") / ("),e("code",[t._v("git pull --rebase origin master")]),t._v(")"),e("br"),t._v("\n3.若合并有冲突则解决冲突后本地提交（git  push）")]),t._v(" "),e("h4",{attrs:{id:"本地新建的分支（非master"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地新建的分支（非master"}},[t._v("#")]),t._v(" 本地新建的分支（非master")]),t._v(" "),e("p",[t._v("若不推送到远程，则对其他人不可见")]),t._v(" "),e("h4",{attrs:{id:"本地创建和远程创建分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地创建和远程创建分支"}},[t._v("#")]),t._v(" 本地创建和远程创建分支")]),t._v(" "),e("p",[e("code",[t._v("git checkout –b branch-name origin/branch-name")])]),t._v(" "),e("h4",{attrs:{id:"建立本地和远程分支联系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立本地和远程分支联系"}},[t._v("#")]),t._v(" 建立本地和远程分支联系")]),t._v(" "),e("p",[e("code",[t._v("git branch -–set-upstream-to branch-name origin/branch-name")])]),t._v(" "),e("h4",{attrs:{id:"解除与远程分支联系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解除与远程分支联系"}},[t._v("#")]),t._v(" 解除与远程分支联系")]),t._v(" "),e("p",[e("code",[t._v("git branch --unset-upstrean <branch-name>")])]),t._v(" "),e("h4",{attrs:{id:"bug分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bug分支"}},[t._v("#")]),t._v(" bug分支")]),t._v(" "),e("ul",[e("li",[t._v("git stash 把正在工作的分支暂存起来")]),t._v(" "),e("li",[t._v("git stash 恢复 "),e("code",[t._v("git stash apply")]),t._v("恢复+ "),e("code",[t._v("git stash drop")]),t._v("删除")]),t._v(" "),e("li",[t._v("git stash 恢复 "),e("code",[t._v("git stash pop")]),t._v(" 恢复+删除")])]),t._v(" "),e("h4",{attrs:{id:"合并删除分支（合并后有历史，非fast-forward）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并删除分支（合并后有历史，非fast-forward）"}},[t._v("#")]),t._v(" 合并删除分支（合并后有历史，非fast-forward）")]),t._v(" "),e("p",[e("code",[t._v("git merge -–no-ff –m “comment” branch-name")])]),t._v(" "),e("h4",{attrs:{id:"删除git缓存区内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除git缓存区内容"}},[t._v("#")]),t._v(" 删除git缓存区内容")]),t._v(" "),e("p",[e("code",[t._v("git rm –r –-cached .")])]),t._v(" "),e("h4",{attrs:{id:"查找commit-id所包含的分支名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找commit-id所包含的分支名"}},[t._v("#")]),t._v(" 查找commit-id所包含的分支名")]),t._v(" "),e("p",[e("code",[t._v("git branch --contains <commit-id>")])]),t._v(" "),e("h4",{attrs:{id:"恢复本地被误删的分支（远程拉取）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#恢复本地被误删的分支（远程拉取）"}},[t._v("#")]),t._v(" 恢复本地被误删的分支（远程拉取）")]),t._v(" "),e("p",[e("code",[t._v("git checkout -b <branch-name>")])]),t._v(" "),e("h4",{attrs:{id:"获取本地仓库发生过的变更"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取本地仓库发生过的变更"}},[t._v("#")]),t._v(" 获取本地仓库发生过的变更")]),t._v(" "),e("p",[e("code",[t._v("git reflog")]),e("br"),t._v(" "),e("code",[t._v("git log --pretty=online")]),t._v("?获取记录")]),t._v(" "),e("h4",{attrs:{id:"删除远程分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[t._v("#")]),t._v(" 删除远程分支")]),t._v(" "),e("p",[e("code",[t._v("git push origin --delete <branch-name>")]),e("br"),t._v("\n####删除未合并分支"),e("br"),t._v(" "),e("code",[t._v("git branch –D branch-name")])]),t._v(" "),e("p",[e("strong",[t._v("HEAD指向版本库的头")])]),t._v(" "),e("h4",{attrs:{id:"撤销修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改"}},[t._v("#")]),t._v(" 撤销修改")]),t._v(" "),e("p",[e("code",[t._v("git checkout – filename")])]),t._v(" "),e("ol",[e("li",[t._v("文件自修改后未放入缓存区，则回到和版本库一样的状态")]),t._v(" "),e("li",[t._v("文件放入缓存区后有修改，则回到添加到缓存区的状态")])]),t._v(" "),e("h4",{attrs:{id:"切换分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),e("p",[e("code",[t._v("git checkout branch-name")])]),t._v(" "),e("h4",{attrs:{id:"取消暂存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消暂存"}},[t._v("#")]),t._v(" 取消暂存")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("git reset HEAD <filename>")])])]),t._v(" "),e("ol",[e("li",[t._v("撤销（git push 以前，在本地仓库执行）")]),t._v(" "),e("li",[t._v("文件被修改，未git add"),e("br"),t._v(" "),e("code",[t._v("git checkout filename")]),e("br"),t._v(" "),e("code",[t._v("git checkout .")])]),t._v(" "),e("li",[t._v("同时对多个文件执行了"),e("code",[t._v("git add")]),t._v("操作，但本次只想提交一部分文件"),e("br"),t._v(" "),e("code",[t._v("git reset HEAD <filename>")]),t._v("(取消缓存)"),e("br"),t._v("\n文件执行了git add，但想撤销对其的修改"),e("br"),t._v(" "),e("code",[t._v("git reset HEAD filename")]),t._v("（取消缓存）"),e("br"),t._v(" "),e("code",[t._v("git checkout filename")]),t._v("（撤销修改）")]),t._v(" "),e("li",[t._v("修改的文件已被git commit，但想再次修改不再产生新的commit"),e("br"),t._v(" "),e("code",[t._v("git commit –amend –m ‘说明’")])]),t._v(" "),e("li",[t._v("在本地执行了多次commit，想撤销到其中某次commit"),e("br"),t._v(" "),e("code",[t._v("git reset [--hard|soft|mixed|merge|keep] [commit|HEAD]")])])]),t._v(" "),e("h4",{attrs:{id:"回滚-（git-push后）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回滚-（git-push后）"}},[t._v("#")]),t._v(" 回滚 （git push后）")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("撤销指定文件到指定版本"),e("br"),t._v(" "),e("code",[t._v("git log <filename> + git checkout <commitId> <filename>")])])]),t._v(" "),e("li",[e("p",[t._v("删除最后一次远程提交"),e("br"),t._v(" "),e("code",[t._v("git revert HAED + git push origin master")]),e("br"),t._v(" "),e("code",[t._v("git reset --hard <commit-id>")]),t._v("（撤回提交到远程的修改，文件内容恢复到最新提交内容）+ "),e("code",[t._v("git push origin master -f")])])]),t._v(" "),e("li",[e("p",[t._v("revert是放弃指定提交的修改，但会生成一次新的提交，需要填写提交注释，以前的历史记录都在")])]),t._v(" "),e("li",[e("p",[t._v("reset是指将HEAD指针指到指定提交，历史记录中不会出现放弃提交记录")])])]),t._v(" "),e("h4",{attrs:{id:"查找被意外删除的提交-commit等操作的记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找被意外删除的提交-commit等操作的记录"}},[t._v("#")]),t._v(" 查找被意外删除的提交/commit等操作的记录")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("git fsck --lost-found")]),t._v("（适用于add后没commit）")]),t._v(" "),e("li",[e("code",[t._v("git reflog")]),t._v(" (适用于commit之后)"),e("br"),t._v("\n查找出commit-id 后使用 "),e("code",[t._v("git reset --hard <commit-id>")]),t._v(" 恢复")])]),t._v(" "),e("h4",{attrs:{id:"回滚某次提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回滚某次提交"}},[t._v("#")]),t._v(" 回滚某次提交")]),t._v(" "),e("p",[e("code",[t._v("git log + git revert commitID")])]),t._v(" "),e("h4",{attrs:{id:"删除某次提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除某次提交"}},[t._v("#")]),t._v(" 删除某次提交")]),t._v(" "),e("p",[e("code",[t._v("git rebase –i ‘commitID’")])])])}),[],!1,null,null,null);a.default=r.exports}}]);