//before you write controller create database js
const pool = require("../database/index.js");
const postsController = {
    // getAll: async(req, res)=>{
    //     try {
    //         const [rows, fields] = await pool.query("select * from posts_");
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
    // create: async(req, res)=>{
    //     try {

    //         const{title, content} = req.body;
    //         const sql = "insert into posts_ (title, content) values (? , ?)";
    //         const [rows, fields] = await pool.query(sql, [title, content]);
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
    // getById: async(req, res)=>{
    //     try {
    //         const {id} = req.params
    //         const [rows, fields] = await pool.query("select * from posts_ where id=?", [id]);
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
    // update: async(req, res)=>{
    //     try {

    //         const{title, content} = req.body;
    //         const {id} = req.params;
    //         const sql = "update posts_ set title=?, content=? where id=?";
    //         const [rows, fields] = await pool.query(sql, [title, content, id]);
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
    // delete: async(req, res)=>{
    //     try {
    //         const {id} = req.params
    //         const [rows, fields] = await pool.query("delete from posts_ where id=?", [id]);
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
    getDeptCodeAndStudentCount: async(req, res)=>{
        try {
            const sql = "select concat(e.EMP_FNAME, ' ', e.EMP_NUM) AS Professor, concat(s.STU_FNAME, ' ', s.STU_LNAME) AS Students from student `s` left join department `d` on s.DEPT_CODE = d.DEPT_CODE left join professor `p` on d.DEPT_CODE = p.DEPT_CODE left join employee `e` on p.EMP_NUM=e.EMP_NUM where p.EMP_NUM = '114'";
            const [rows, fields] = await pool.query(sql);
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            });
        }
    },
    getDeptCodeandStudentFullName: async(req, res)=>{
        try {
            const sql = "SELECT d.DEPT_CODE, concat(s.STU_FNAME, ' ', s.STU_LNAME) AS StudentFullName FROM department `d` RIGHT JOIN student `s` ON d.DEPT_CODE = s.DEPT_CODE";
            const [rows, fields] = await pool.query(sql);
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            });
        }
    },
    getProfessorAndStudentCount: async(req, res)=>{
        try {
            const sql = "SELECT concat(e.EMP_FNAME, ' ', e.EMP_LNAME, ' ', e.EMP_NUM) as Professor, count(s.STU_NUM) as NoOfStudents FROM student `s` left join department `d` on s.DEPT_CODE = d.DEPT_CODE left join professor `p` on d.DEPT_CODE = p.DEPT_CODE left join employee `e` on p.EMP_NUM = e.EMP_NUM group by e.EMP_NUM";
            const [rows, fields] = await pool.query(sql);
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            });
        }
    },
    getProfessorAndHiredate: async(req, res)=>{
        try {
            const sql = "select concat(e.EMP_FNAME, ' ', e.EMP_LNAME, '-', e.EMP_NUM) AS Professor, date_format(e.EMP_HIREDATE, '%Y/%M/%D') AS DateHired from employee `e` left join professor `p` on e.EMP_NUM=p.EMP_NUM";
            const [rows, fields] = await pool.query(sql);
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            });
        }
    },
    getDeptAndStudentAcct: async(req, res)=>{
        try {
            const sql = "SELECT department.DEPT_CODE, count(student.STU_NUM) AS NumberOfStudents FROM department RIGHT JOIN student ON department.DEPT_CODE = student.DEPT_CODE GROUP BY student.DEPT_CODE HAVING department.DEPT_CODE ='ACCT'";
            const [rows, fields] = await pool.query(sql);
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            });
        }
    },
};

module.exports = postsController;