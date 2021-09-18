import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const Modal = ({id, isOpen, isFavorite, onCloseModal}) => {
    const modalText = !isFavorite ? "Ürünü sepetten sildikten sonra favorilerinize eklemek ister misiniz?" : "Ürünü sepetten silmek istediğinize emin misiniz?";
    const cancelButtonText = !isFavorite ? 'Sil' : 'İptal'
    const deleteButtonText = !isFavorite ? 'Sil ve favorilerime ekle' : 'Sil'
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true)
    };
    const closeModal = (removeFromBasket, addToFavorites) => {
        setOpen(false)
        onCloseModal({
            id: id,
            removeFromBasket: removeFromBasket,
            addToFavorites: addToFavorites
        })
    };

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {modalText}
                </DialogTitle>
                <DialogActions>
                    <Button  onClick={() => { !isFavorite ? closeModal(true, false) : closeModal(false, false)}}>
                        {cancelButtonText}
                    </Button>
                    <Button onClick={() => { !isFavorite ? closeModal(true, true) : closeModal(true, false)}} autoFocus>
                        {deleteButtonText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Modal;
