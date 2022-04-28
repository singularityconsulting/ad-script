window.ADLIBRARY =
    window.ADLIBRARY ||
    (function () {
      let slotsMap = []

      const mobileSizes = [
        [300, 600],
        [160, 600],
        [120, 600],
        [336, 280],
        [300, 250],
        [320, 100],
        [320, 50],
        [300, 50],
        [250, 250],
      ]
      const tabletSizes = [
          [728, 90],
          [468, 60],
          [336, 280],
          [320, 50],
          [300, 250],
          [300, 100],
      ]
      const desktopSizes = [
        [970, 250],
        [970, 90],
        [970, 60],
        [728, 90],
        [468, 60],
        [336, 280],
        [320, 50],
        [300, 250],
        [300, 100],
      ]
      const largeBannerSizes = [
        [970, 90],
        [970, 250],
      ]
      const feedSizes = [
        [336, 280],
        [300, 250],
      ]

      const tabletFeedSizes = [
        [336, 280],
        [320, 100],
        [320, 50],
        [300, 250],
        [300, 100],
        [300, 50],
      ]
      const mobileFeedSizes = [
        [336, 280],
        [320, 100],
        [320, 50],
        [300, 250],
        [300, 100],
        [300, 50],
        [300, 600],
        [336, 600],
      ]
      const stickySizes = [
        [336, 280],
        [320, 100],
        [320, 50],
        [300, 250],
        [300, 100],
        [300, 50],
        [300, 600],
        [160, 600],
        [120, 600],
      ]

      const bottomStickyDesktopSizes = [
        [970, 90],
        [970, 66],
        [728, 90],
        [468, 60],
      ]
      const bottomStickyTabletSizes = [
        [970, 90],
        [970, 66],
        [728, 90],
        [320, 50],
        [300, 50],
      ]
      const bottomStickyMobileSizes = [
        [320, 50],
        [300, 50],
      ]

      const topBannerMobileSizes = [
        [320, 50],
        [300, 50],
      ]


      const isMobile = () => {
        const UA = navigator.userAgent || navigator.vendor || window.opera
        return (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                UA
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                UA.substr(0, 4)
            )
        )
      }
      const initAds = () => {
        window.googletag = window.googletag || { cmd: [] }
        const googletag = window.googletag
        googletag.cmd.push(() => {
          googletag.pubads().setCentering(true)
          googletag.pubads().collapseEmptyDivs()
          googletag.pubads().disableInitialLoad()
          googletag.enableServices()
        })
      }
      const displayAd = (slot) => {
        window.googletag = window.googletag || { cmd }
        const googletag = window.googletag
        googletag.cmd.push(() => {
          googletag.display(slot.slotId)
          const slots = googletag.pubads().getSlots()
          if (Array.isArray(slots)) {
            const slotID = slot.slotId
            const slotName = slot.slotName

            let sizes

            if (slot?.type === 'sidebar') {
              sizes = [...stickySizes]
            } else {
              sizes = [...mobileSizes, ...tabletSizes, ...desktopSizes]
            }

            const amazonSlotObj = { slotID, slotName, sizes }

            if (amazonSlotObj.sizes.length > 0) {
              const curSlot = slots.find((s) => s.getSlotElementId() === slotID)

              apstag.fetchBids({ slots: [amazonSlotObj] }, function (bids) {
                // trigger the first request to DFP
                googletag.cmd.push(function () {
                  apstag.setDisplayBids()
                  googletag.pubads().refresh([curSlot])
                })
              })
            }
          }
        })
      }
      const prepareSlots = () => {
        window.googletag = window.googletag || { cmd: [] }
        const googletag = window.googletag
        slotsMap.forEach((slot) => {
          googletag.cmd.push(function () {
            const element = window.document.getElementById(slot.slotId)
            if (element) {
              let sizeMap
              let sizes
              const { innerWidth } = window
              if (slot.type && slot.type == 'feed') {
                if (innerWidth >= 970) {
                  sizes = feedSizes
                } else if (innerWidth >= 768 && innerWidth < 970) {
                  sizes = tabletFeedSizes
                } else {
                  sizes = mobileFeedSizes
                }
                sizeMap = googletag
                    .sizeMapping()
                    .addSize([970, 0], feedSizes)
                    .addSize([768, 0], tabletFeedSizes)
                    .addSize([0, 0], mobileFeedSizes)
                    .build()
              } else if (slot.type && slot.type == 'header') {
                if (innerWidth >= 970) {
                  sizes = largeBannerSizes
                } else if (innerWidth >= 768 && innerWidth < 970) {
                  sizes = tabletSizes
                } else {
                  sizes = mobileSizes
                }
                sizeMap = googletag
                    .sizeMapping()
                    .addSize([970, 0], largeBannerSizes)
                    .addSize([768, 0], tabletSizes)
                    .addSize([0, 0], mobileSizes)
                    .build()
              } else if (slot.type && slot.type == 'header_banner') {
                if (innerWidth >= 970) {
                  sizes = largeBannerSizes
                } else if (innerWidth >= 768 && innerWidth < 970) {
                  sizes = tabletSizes
                } else {
                  sizes = topBannerMobileSizes
                }
                sizeMap = googletag
                    .sizeMapping()
                    .addSize([970, 0], largeBannerSizes)
                    .addSize([768, 0], tabletSizes)
                    .addSize([0, 0], topBannerMobileSizes)
                    .build()
              } else if (slot.type && slot.type == 'sidebar') {
                if (innerWidth >= 1280) {
                  sizes = stickySizes
                  sizeMap = googletag
                      .sizeMapping()
                      .addSize([1280, 0], stickySizes)
                      .addSize([0, 0], [])
                      .build()
                }
              } else if (slot.type && slot.type == 'bottomsticky') {
                  sizes = stickySizes
                  sizeMap = googletag
                      .sizeMapping()
                      .addSize([970, 0], bottomStickyDesktopSizes)
                      .addSize([768, 0], bottomStickyTabletSizes)
                      .addSize([0, 0], bottomStickyMobileSizes)
                      .build()
              } else {
                if (innerWidth >= 970) {
                  sizes = desktopSizes
                } else if (innerWidth >= 768 && innerWidth < 970) {
                  sizes = tabletSizes
                } else {
                  sizes = mobileSizes
                }
                sizeMap = googletag
                    .sizeMapping()
                    .addSize([970, 0], desktopSizes)
                    .addSize([768, 0], tabletSizes)
                    .addSize([0, 0], mobileSizes)
                    .build()
              }

              if (sizeMap) {
                  if (slot.type !== 'feed_even') {
                      const adSlot = googletag
                          .defineSlot(slot.slotName, sizes, slot.slotId)
                          .addService(googletag.pubads())
                      adSlot.defineSizeMapping(sizeMap)
                      displayAd(slot)
                  } else if (innerWidth >= 768 && slot.type === 'feed_even') {
                      const adSlot = googletag
                          .defineSlot(slot.slotName, sizes, slot.slotId)
                          .addService(googletag.pubads())
                      adSlot.defineSizeMapping(sizeMap)
                      displayAd(slot)
                  }
              }
            }
          })
        })
      }

      return {
        init: function (pubID, curSlotsMap) {
          slotsMap = curSlotsMap
          !(function (a9, a, p, s, t, A, g) {
            if (a[a9]) return
            function q(c, r) {
              a[a9]._Q.push([c, r])
            }
            a[a9] = {
              init: function () {
                q('i', arguments)
              },
              fetchBids: function () {
                q('f', arguments)
              },
              setDisplayBids: function () {},
              _Q: [],
            }
            A = p.createElement(s)
            A.async = !0
            A.src = t
            g = p.getElementsByTagName(s)[0]
            g.parentNode.insertBefore(A, g)
          })(
              'apstag',
              window,
              document,
              'script',
              '//c.amazon-adsystem.com/aax2/apstag.js'
          )
          // initialize apstag and have apstag set bids on the googletag slots when they are returned to the page

          apstag.init({
            pubID,
            adServer: 'googletag',
            bidTimeout: 500,
          })

          initAds()
          prepareSlots()
        }
      }
    })()
