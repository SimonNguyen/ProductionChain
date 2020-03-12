import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';

import AboutMenu from './AboutMenu';
import ImportExportMenu from './ImportExportMenu';
import ClearMenu from './ClearMenu';
import RecipeMenu from './RecipeMenu';
import SettingsMenu from './SettingsMenu';

const MenuDialog = ({
  contentType,
  isOpen,
  recipes,
  size,
  themeType,
  title,
  handleClose,
  handleClear,
  handleRecipes,
  handleTheme,
}) => {
  return (
    <Dialog
      disableBackdropClick={contentType === 'add'}
      fullWidth
      maxWidth={size}
      open={isOpen}
      onClose={handleClose}>
      {contentType === 'about' ? (
        <AboutMenu title={title} handleClose={handleClose} />
      ) : contentType === 'import' ? (
        <ImportExportMenu
          title={title}
          handleClose={handleClose}
          handleRecipes={handleRecipes}
          recipes={recipes}
        />
      ) : contentType === 'clear' ? (
        <ClearMenu
          title={title}
          handleClear={handleClear}
          handleClose={handleClose}
        />
      ) : contentType === 'add' ? (
        <RecipeMenu title={title} handleClose={handleClose} />
      ) : contentType === 'settings' ? (
        <SettingsMenu
          title={title}
          handleClose={handleClose}
          handleTheme={handleTheme}
          themeType={themeType}
        />
      ) : (
        <DialogContentText>No valid content type selected.</DialogContentText>
      )}
    </Dialog>
  );
};

export default MenuDialog;
