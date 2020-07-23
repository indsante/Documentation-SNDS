<template>
  <footer class="page-edit">
    <div class="edit-link" v-if="editLink">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">Éditer</a>
      <OutboundLink />
    </div>
    <div class="edit-link" v-if="issueLink">
      <a :href="issueLink" target="_blank" rel="noopener noreferrer">Proposer une modification</a>
      <OutboundLink />
    </div>
    <div class="edit-link" v-if="historyLink">
      <a :href="historyLink" target="_blank" rel="noopener noreferrer">Historique</a>
      <OutboundLink />
    </div>

    <div class="last-updated" v-if="lastUpdated">
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated | moment }}</span>
    </div>
    <div>
      <br/>
      <input type="hidden" value="https://gitlab.com/healthdatahub/documentation-snds/-/blob/master/" id="Citation">
      <button class="button" v-on:click="copyQuotation()">Copier le lien à citer</button>
      <div class="last-updated">
      Licence : Mozilla Public License 2.0 (MPL-2.0)
       </div>
    </div>
  </footer>
</template>
<script>
import isNil from 'lodash/isNil'
import { endingSlashRE, outboundRE } from '@parent-theme/util'
const moment = require('moment')

export default {
  name: 'PageEdit',
  computed: {
    lastUpdated () {
      return this.$page.lastUpdated
    },

    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    editLink () {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink

      const {
        repo,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      if (showEditLink && docsRepo && this.$page.relativePath) {
         var path = this.$page.relativePath
        if (this.$page.relativePath.includes('tables/') && !this.$page.relativePath.includes('README.md')){
          path = path.replace('tables/','tables/.sources/');
        }
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          path
        )
      }
      return null
    },

    issueLink () {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink

      const {
        repo,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createIssueLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        )
      }
      return null
    },

    historyLink () {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink

      const {
        repo,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      if (showEditLink && docsRepo && this.$page.relativePath) {
        var path = this.$page.relativePath
        if (this.$page.relativePath.includes('tables/') && !this.$page.relativePath.includes('README.md')){
          path = path.replace('tables/','tables/.sources/');
          console.log(path)
        }
        return this.createHistoryLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          path
        )
      }
      return null
    }

  },

  methods: {
    /**
     * Creates the link to edit document on Gitlab
     */
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo
        return (
          base.replace(endingSlashRE, '')
          + `/src`
          + `/${docsBranch}/`
          + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
          + path
          + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '')
        + `/edit`
        + `/${docsBranch}/`
        + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
        + path
      )

    },
    /**
     * Creates a link to report an issue for a specific page on Gitlab
     */
    createIssueLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo
        return (
          base.replace(endingSlashRE, '')
          + `/src`
          + `/${docsBranch}/`
          + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
          + path
          + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

       const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '')
           + `/issues/new?issuable_template=proposition_documentation&issue[title]=Proposition sur la page `
          + path
      )
    },
    /**
     * Creates the link to the gitlab history of a specific page
     */
    createHistoryLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo
        return (
          base.replace(endingSlashRE, '')
          + `/src`
          + `/${docsBranch}/`
          + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
          + path
          + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '')
        + `/commits`
        + `/${docsBranch}/`
        + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
        + path
      )

    },
    /**
     * Copies the link to quote the page
     */
    copyQuotation: function(event){
      var copyText = document.getElementById("Citation");
      copyText.value += this.$page.relativePath.replace('tables/','tables/.sources/');
      copyText.setAttribute('type', 'text'); 
      copyText.select();
      document.execCommand("copy");
      alert("Le lien suivant a été copié: " + copyText.value);
      copyText.value = "https://gitlab.com/healthdatahub/documentation-snds/-/blob/master/";
      copyText.setAttribute('type', 'hidden'); 
    }
  },

  filters: {
    /**
     * Filter for last updated date display
     */
    moment: function (date) {
      return moment(date).format('DD/MM/YYYY');
    }
  }
}
</script>
<style lang="stylus">
@require '~@parent-theme/styles/wrapper.styl'

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto

  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right 0.25rem
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa
  .button
    border 1px solid #ddd
    border-radius 4px
    font-size 14px
    cursor pointer
    background-color lighten($textColor, 25%)
    color #fff

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom 0.5rem
    .last-updated
      font-size 0.8em
      float none
      text-align left

</style>
