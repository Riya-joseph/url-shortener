const { MongoClient, ObjectId } = require('mongodb');

class TestRepository {
    constructor() {
        this.collectionName = 'test';
        this.client = new MongoClient('mongodb://localhost:27017');
        this.db = null;
        this.collection = null;
    }

    async connect() {
        try {
            await this.client.connect();
            this.db = this.client.db('yourDatabaseName');
            this.collection = this.db.collection(this.collectionName);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Failed to connect to MongoDB', error);
        }
    }

    async disconnect() {
        try {
            await this.client.close();
            console.log('Disconnected from MongoDB');
        } catch (error) {
            console.error('Failed to disconnect from MongoDB', error);
        }
    }

    async create(data) {
        try {
            const result = await this.collection.insertOne(data);
            return result.insertedId;
        } catch (error) {
            console.error('Failed to create document', error);
            return null;
        }
    }

    async read(id) {
        try {
            const result = await this.collection.findOne({ _id: ObjectId(id) });
            return result;
        } catch (error) {
            console.error('Failed to read document', error);
            return null;
        }
    }

    async update(id, data) {
        try {
            const result = await this.collection.updateOne({ _id: ObjectId(id) }, { $set: data });
            return result.modifiedCount;
        } catch (error) {
            console.error('Failed to update document', error);
            return 0;
        }
    }

    async delete(id) {
        try {
            const result = await this.collection.deleteOne({ _id: ObjectId(id) });
            return result.deletedCount;
        } catch (error) {
            console.error('Failed to delete document', error);
            return 0;
        }
    }
}

module.exports = TestRepository;