/**
 * Created by aleidasarzuri on 6/26/2015.
 */
  /*
  If is column return 0 - Vertical
  If is row returs 1 - Horizontal

   */
var Axis = function(column, row)
{
    var _axis = [column, row];

    this.getColumn = function()
    {
        return _axis[0];
    };

    this.getRow = function()
    {
        return _axis[1];
    };

};