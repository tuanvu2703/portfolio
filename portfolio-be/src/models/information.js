'use strict';

export default (sequelize, DataTypes) => {
  const Information = sequelize.define('Information', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    role: DataTypes.STRING,
    bio: DataTypes.TEXT,
    birthYear: DataTypes.INTEGER,
    location: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    contacts: DataTypes.JSON,
    project_id: DataTypes.UUID,
    skill_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Information'
  });

  Information.associate = (models) => {
    Information.belongsTo(models.Project, {
      foreignKey: 'project_id',
      as: 'project'
    });

    Information.belongsTo(models.Skill, {
      foreignKey: 'skill_id',
      as: 'skill'
    });
  };

  return Information;
};