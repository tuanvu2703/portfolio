'use strict';

export default (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    icon_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Skill',
  });

  Skill.associate = (models) => {
    Skill.belongsToMany(models.Project, {
      through: 'ProjectSkill',
      foreignKey: 'skill_id',
      otherKey: 'project_id'
    });
  };

  return Skill;
};