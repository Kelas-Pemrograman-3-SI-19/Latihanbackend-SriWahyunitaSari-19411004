const kegiatanmodel = require('../model/kegiatan')

exports.create = (data) =>
new Promise((resolve, reject) => {
  kegiatanmodel.create(data)
  .then(() => {
      resolve ({
          status: true,
          pesan: 'Berhasil input Kegiatan'
      })
  }).catch(() => reject ({
      status: false,
      pesan: 'Gagal Input Kegiatan'
  }))
})