<!-- modal medium -->
<div class="modal fade" id="mediumModal" tabindex="-1" role="dialog" aria-labelledby="mediumModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="mediumModalLabel">Medium Modal</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card">
                    <div class="card-body card-block">
                        <form action="" method="post" class="form-horizontal">
                            <div class="row form-group">
                                <div class="col col-md-3">
                                    <label for="id_user" class=" form-control-label">ID User</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="email" id="id_user" name="id_user" placeholder="" class="form-control">
                                    <span class="help-block text-danger validasi-id-user">ID User belum diisi</span>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3">
                                    <label for="nama_user" class=" form-control-label">Nama User</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="email" id="nama_user" name="nama_user" placeholder=""
                                        class="form-control">
                                    <span class="help-block text-danger validasi-nama-user">Nama User belum diisi</span>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3">
                                    <label for="hf-email" class=" form-control-label">Email</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="email" id="hf-email" name="hf-email" placeholder="Input Email"
                                        class="form-control">
                                    <span class="help-block text-danger validasi-email">Email belum diisi</span>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3">
                                    <label for="hf-password" class=" form-control-label">Lev. User</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <select class=" form-control" id="lev_user" name="lev_user">
                                        <option value="">-- Pilih --</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Kasir">Kasir</option>
                                    </select>
                                    <span class="help-block text-danger validasi-level">Level user belum dipilih</span>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" id="btn-simpan" class="btn btn-success">Simpan</button>
                                <button type="button" id="btn-update" class="btn btn-success">update</button>
                                <button type="reset" id="btn-batal" class="btn btn-danger">Batal</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- end modal medium -->